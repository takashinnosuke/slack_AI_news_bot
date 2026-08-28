type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

/**
 * フィード情報一覧。追加順
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['日本フィジカルAI新聞', 'https://physicalainews.jp/news/feed.xml'],
]);

/**
 * その他候補
 *
 * RSSがなくなった。復活したら入れたい
 * https://blog.gmo.media/
 * ['ココネ', 'https://engineering.cocone.io/feed/'],
 *
 * リニューアルされてフィードが消えたのでしばらくしたら確認
 * ['divx', 'https://engineering.divx.co.jp/feed'],
 *
 * 技術のカテゴリ切られてないので悩ましい
 * ['Ragate', 'https://www.ragate.co.jp/blog/'],
 *
 * 会社解散・合併・倒産
 * ['GRIPHONE', 'https://tech.griphone.co.jp/feed/'],
 * ['トップゲート', 'https://www.topgate.co.jp/category/engineer/feed'],
 * ['ロコガイド', 'https://techblog.locoguide.co.jp/feed'],
 * ['トラーナ', 'https://tech.torana.co.jp/feed'],
 * ['ハンズラボ', 'https://www.hands-lab.com/feed/'],
 *
 * ブランド統合でブログ移行
 * ['ニフクラ', 'https://blog.pfs.nifcloud.com/feed'],
 *
 * サイト終了
 * ['iCARE', 'https://dev.icare.jpn.com/feed/'],
 *
 * ブログ移行でフィードURLが変更。新フィードURL未確認
 * ['DROBE', 'https://tech.drobe.co.jp/feed'],
 * ['HireRoo', 'https://hireroo.io/rss/IJhPN95WMIcPni1r59Tt'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 * ['BRANU', 'https://tech.branu.jp/feed'],
 * ['i-plug', 'https://itbl.hatenablog.com/feed'],
 * ['UUUM', 'https://system.blog.uuum.jp/feed'],
 * ['CROOZ SHOPLIST', encodeURI('https://crooz.co.jp/recruit_group/blog/category/テックブログ/feed/')],
 * ['マクロミル', 'https://techblog.macromill.com/feed'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 * ['Findy Teams', 'https://engineering-org.findy-teams.com/feed.xml'],
 * ['KINTOテクノロジーズ', 'https://blog.kinto-technologies.com/feed.xml'],
 * ['テリロジー', 'https://terilogy-tech.hatenablog.com/feed'],
 * ['ヘイ データチーム', 'https://data.hey.jp/feed'],
 * ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
 * ['crispy', 'https://blog.crispy-inc.com/feed'],
 * ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
 * ['JBCC', 'https://jbcc-tech.hatenablog.com/feed'],
 * ['Zeals', 'https://tech.zeals.co.jp/feed'],
 * ['hokan', 'https://medium.com/feed/@hokan_dev'],
 * ['Filot', 'https://filot-nextd2.hatenablog.com/feed'],
 * ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
 * ['Wiz', 'https://tech.012grp.co.jp/feed'],
 * ['intage', 'https://www.intage-ts.com/feed'],
 * ['NAXA', 'https://blog.naxa.co.jp/feed'],
 * ['Reigle', 'https://www.reigle.info/feed'],
 * ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
 * ['Croooober', 'https://tech.croooober.co.jp/feed'],
 * ['トライステージ', 'https://blog.ddm.tri-stage.jp/feed/'],
 * ['ヒュープロ', 'https://hupro-techblog.hatenablog.com/feed'],
 * ['ファンコミュニケーションズ', 'https://tech-blog.fancs.com/feed'],
 * ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
 * ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
 * ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
 * ['ホクソエム', 'https://blog.hoxo-m.com/feed'],
 * ['メンテモ', 'https://engineering.mentemo.com/feed'],
 * ['ダンクハーツ', 'https://dhe.dank-hearts.net/m/m18705e344ee6/rss'],
 * ['パトコア', 'https://tech.patcore.com/feed'],
 * ['ジークレスト', 'https://blog.gcrest.com/feed'],
 *
 * unable to verify the first certificate
 * ['エムアールピー', 'https://mrp-net.co.jp/tech_blog/feed'],
 *
 * certificate has expired
 * ['キャスレーコンサルティング', 'https://www.casleyconsulting.co.jp/blog/engineer/feed/'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * フィードなし。スクレイピング？
 * https://lab.mo-t.com/blog
 * https://tech-blog.sweeep.ai/
 * https://minedia-engineer-hub-minedia.vercel.app/
 * https://segaxd.co.jp/news/?category=blog
 * https://tech.smartshopping.co.jp/
 * https://olaris.jp/category/technology
 * https://licensecounter.jp/engineer-voice/blog/
 * https://tech.ilovex.co.jp/
 * https://developer.nvidia.com/ja-jp/blog/
 * https://www.vision-c.co.jp/engineerblog
 * https://www.cresco.co.jp/blog/
 * https://blog.genda.jp/creators/
 * https://lab.hokadoko.com/news/RTEPiK54
 * https://subthread.co.jp/blog/
 * ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
 * https://securesky-plus.com/engineerblog/
 * https://www.monolithsoft.co.jp/techblog/
 * ['リクルートテクノロジーズ', 'https://techblog.recruit.co.jp/rss.xml'],
 *
 * エラーのため一時除外
 * ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
 * ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
 * ['ドクターズプライム', 'https://blog.drsprime.com/feed/category/%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0'],
 * ['ヌーラボ', 'https://nulab.com/ja/blog/categories/techblog/feed/'],
 * ['ハウテレビジョン', 'https://blog.howtelevision.co.jp/feed'],
 * ['メディアドゥ', 'https://techdo.mediado.jp/feed'],
 * ['メルカリ', 'https://engineering.mercari.com/blog/feed.xml'],
 * ['遊舎工房', 'https://blog.yushakobo.jp/feed'],
 *
 * 日本語以外
 * https://medium.com/feed/mcdonalds-technical-blog
 * https://netflixtechblog.com/
 * https://discord.com/blog/
 * https://www.twilio.com/blog
 * https://engineering.monstar-lab.com/en/
 *
 * TODO: スライド系も追加？
 * https://speakerdeck.com/line_developers
 */
