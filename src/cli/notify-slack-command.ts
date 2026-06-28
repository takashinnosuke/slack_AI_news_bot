import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { create as flatCacheCreate } from 'flat-cache';
import { logger } from '../feed/logger';

interface BlogFeed {
  title: string;
  link: string;
  linkMd5Hash: string;
  ogImageUrl: string;
  ogDescription: string;
  items: {
    title: string;
    link: string;
    summary: string;
    content_html: string;
    isoDate: string;
    hatenaCount: number;
    ogImageUrl: string;
  }[];
}

interface Article {
  title: string;
  link: string;
  summary: string;
  isoDate: string;
  ogImageUrl: string;
  blogTitle: string;
  blogLink: string;
}

const dirName = url.fileURLToPath(new URL('.', import.meta.url));
const blogFeedsPath = path.join(dirName, '../site/blog-feeds/blog-feeds.json');

function escapeSlackMrkdwn(text: string): string {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendToSlack(article: Article, webhookUrl: string) {
  const escapedTitle = escapeSlackMrkdwn(article.title);
  const escapedBlogTitle = escapeSlackMrkdwn(article.blogTitle);
  const escapedSummary = escapeSlackMrkdwn(article.summary);

  const sectionText = `*<${article.link}|${escapedTitle}>*\n🏢 *${escapedBlogTitle}*\n\n${escapedSummary}`;

  const blocks: {
    type: string;
    text?: { type: string; text: string };
    elements?: { type: string; text: string }[];
    accessory?: { type: string; image_url: string; alt_text: string };
  }[] = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: sectionText,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `📅 ${article.isoDate ? new Date(article.isoDate).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) : 'Unknown'}`,
        },
      ],
    },
  ];

  if (article.ogImageUrl) {
    blocks[0].accessory = {
      type: 'image',
      image_url: article.ogImageUrl,
      alt_text: escapedTitle,
    };
  }

  const payload = {
    text: `New article: ${article.title} | ${article.blogTitle}`,
    blocks,
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Slack post failed with status ${response.status}: ${errorText}`);
  }
}

(async () => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    logger.info('SLACK_WEBHOOK_URL is not set. Skipping Slack notification.');
    process.exit(0);
  }

  logger.info('Slack Notifier: Starting Slack notifications...');

  let blogFeeds: BlogFeed[] = [];
  try {
    const blogFeedsContent = await fs.readFile(blogFeedsPath, 'utf-8');
    blogFeeds = JSON.parse(blogFeedsContent) as BlogFeed[];
  } catch (error) {
    logger.error('Slack Notifier: Failed to read blog-feeds.json', error);
    process.exit(1);
  }

  // Extract all articles
  const allArticles: Article[] = [];
  for (const blogFeed of blogFeeds) {
    for (const item of blogFeed.items) {
      allArticles.push({
        title: item.title,
        link: item.link,
        summary: item.summary,
        isoDate: item.isoDate,
        ogImageUrl: item.ogImageUrl,
        blogTitle: blogFeed.title,
        blogLink: blogFeed.link,
      });
    }
  }

  // Sort by date descending (newest first)
  allArticles.sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  // Initialize flat cache
  const cache = flatCacheCreate({
    cacheId: 'slack-notifier-state',
    cacheDir: '.cache',
  });

  const alreadyNotifiedUrls = cache.get<string[]>('notified-urls') || [];
  const notifiedUrlSet = new Set(alreadyNotifiedUrls);

  // If first run, initialize cache with all current articles and exit
  if (alreadyNotifiedUrls.length === 0) {
    logger.info('Slack Notifier: First run detected. Initializing cache with current articles.');
    const allUrls = allArticles.map((a) => a.link);
    cache.set('notified-urls', allUrls);
    cache.save();
    logger.info('Slack Notifier: Cache initialized successfully.');
    process.exit(0);
  }

  // Find new articles
  const newArticles = allArticles.filter((article) => !notifiedUrlSet.has(article.link));
  if (newArticles.length === 0) {
    logger.info('Slack Notifier: No new articles to notify.');
    process.exit(0);
  }

  logger.info(`Slack Notifier: Found ${newArticles.length} new articles.`);

  // Post in chronological order (oldest new article first)
  newArticles.reverse();

  // Limit to prevent rate limiting and channel flood
  const maxPostsPerRun = 10;
  const articlesToPost = newArticles.slice(0, maxPostsPerRun);

  if (newArticles.length > maxPostsPerRun) {
    logger.warn(
      `Slack Notifier: Capping notifications at ${maxPostsPerRun} (out of ${newArticles.length} new articles).`,
    );
  }

  for (const article of articlesToPost) {
    try {
      logger.info(`Slack Notifier: Sending "${article.title}" from "${article.blogTitle}"`);
      await sendToSlack(article, webhookUrl);
      alreadyNotifiedUrls.push(article.link);
      await sleep(1000); // Sleep 1 second to respect Slack's rate limits
    } catch (error) {
      logger.error(`Slack Notifier: Failed to send article "${article.title}"`, error);
    }
  }

  // Keep cache bounded
  const cacheLimit = 1000;
  if (alreadyNotifiedUrls.length > cacheLimit) {
    alreadyNotifiedUrls.splice(0, alreadyNotifiedUrls.length - cacheLimit);
  }

  cache.set('notified-urls', alreadyNotifiedUrls);
  cache.save();

  logger.info('Slack Notifier: Finished processing notifications.');
})();
