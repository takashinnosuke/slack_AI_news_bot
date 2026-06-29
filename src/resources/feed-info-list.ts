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
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['Anthropic', 'https://rsshub.bestblogs.dev/anthropic/news'],
  ['ANDPAD', 'https://tech.andpad.co.jp/feed'],
  ['Adways', 'https://blog.engineer.adways.net/feed'],
  ['BASE', 'https://devblog.thebase.in/feed'],
  ['BIGLOBE', 'https://style.biglobe.co.jp/feed/category/TechBlog'],
  ['Baseconnect', 'https://techblog.baseconnect.in/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['CAMPFIRE', 'https://note.com/campfire_dev/rss'],
  ['Chatwork', 'https://creators-note.chatwork.com/feed'],
  ['Classi', 'https://tech.classi.jp/feed'],
  ['Cluster', 'https://tech-blog.cluster.mu/rss'],
  ['DeNA SWET', 'https://swet.dena.com/feed'],
  ['DeNA', 'https://engineering.dena.com/blog/index.xml'],
  ['Diverse', 'https://developer.diverse-inc.com/feed'],
  ['DMM', 'https://developersblog.dmm.com/feed'],
  ['ENECHANGE', 'https://tech.enechange.co.jp/feed'],
  ['Eureka', 'https://medium.com/feed/eureka-engineering'],
  ['Findy', 'https://tech.findy.co.jp/feed'],
  ['Flatt Security', 'https://blog.flatt.tech/feed'],
  ['GO', 'https://techblog.goinc.jp/feed'],
  ['GREE', 'https://labs.gree.jp/blog/feed/'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['Google DeepMind', 'https://deepmind.google/discover/blog/feed/'],
  ['Google Research', 'https://research.google/blog/rss/'],
  ['Gunosy', 'https://tech.gunosy.io/feed'],
  ['Gunosyデータ分析', 'https://data.gunosy.io/feed'],
  ['HRBrain', 'https://times.hrbrain.co.jp/feed'],
  ['IIJ', 'https://eng-blog.iij.ad.jp/feed'],
  ['JCB', 'https://tech.jcblab.jp/feed'],
  ['JX通信社', 'https://tech.jxpress.net/feed'],
  ['KAIZEN PLATFORM', 'https://developer.kaizenplatform.com/feed'],
  ['KLab DSAS', 'http://dsas.blog.klab.org/index.rdf'],
  ['KLab', 'https://www.klab.com/jp/assets/rss/rss_tech.xml'],
  ['LIFULL', 'https://www.lifull.blog/feed'],
  ['LINEヤフー', 'https://techblog.lycorp.co.jp/ja/feed/index.xml'],
  ['LIVESENSE', 'https://made.livesense.co.jp/feed'],
  ['LayerX', 'https://tech.layerx.co.jp/feed'],
  ['LegalForce', 'https://tech.legalforce.co.jp/feed'],
  ['Legoliss', 'https://blog.legoliss.co.jp/feed'],
  ['Leverages データ戦略', 'https://analytics.leverages.jp/feed'],
  ['MIT Tech Review AI', 'https://www.technologyreview.com/topic/artificial-intelligence/feed/'],
  ['MNTSQ', 'https://tech.mntsq.co.jp/feed'],
  ['Mackerel', 'https://mackerel.io/ja/blog/feed'],
  ['Makuake', 'https://note.com/dev_makuake/rss'],
  ['Mirrativ', 'https://tech.mirrativ.stream/feed'],
  ['Money Forward Kessai', 'https://tech.mfkessai.co.jp/index.xml'],
  ['Nature', 'https://engineering.nature.global/feed'],
  ['Nota', 'https://blog.notainc.com/feed'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['OpenAI', 'https://openai.com/news/rss.xml'],
  ['PR TIMES', 'https://developers.prtimes.com/feed/'],
  // ['Pentagon', 'https://blog.pentagon.tokyo/category/engineering/feed/'],
  ['Preferred Networks', 'https://tech.preferred.jp/ja/blog/llm-plamo/feed/'],
  ['Progate', 'https://tech.prog-8.com/feed'],
  ['READYFOR', 'https://tech.readyfor.jp/feed'],
  ['ROUTE06', 'https://tech.route06.co.jp/feed'],
  ['Repro', 'https://tech.repro.io/feed'],
  ['Retty', 'https://engineer.retty.me/feed'],
  ['SCSK', 'https://blog.usize-tech.com/feed/'],
  ['SEGA XD', 'https://note.com/segaxd/m/m81bdf8ff4be8/rss'],
  ['SEGA', 'https://techblog.sega.jp/feed'],
  ['SHIFT Group', 'https://note.com/shift_tech/rss'],
  ['SHOWROOM', 'https://note.com/showroom_blog/rss'],
  ['STORES', 'https://product.st.inc/feed'],
  ['Safie', 'https://engineers.safie.link/feed'],
  ['Sansan', 'https://buildersbox.corp-sansan.com/feed'],
  ['SmartBank', 'https://blog.smartbank.co.jp/feed'],
  ['SmartHR', 'https://tech.smarthr.jp/feed'],
  ['SmartNews', 'https://developer.smartnews.com/blog/feed'],
  ['SmartNewsメディア担当チーム', 'https://www.mediatechnology.jp/feed'],
  ['Speee', 'https://tech.speee.jp/feed'],
  ['Studyplus', 'https://tech.studyplus.co.jp/feed'],
  ['TVer Technologies', 'https://techblog.tver-tech.co.jp/feed'],
  ['TVer', 'https://techblog.tver.co.jp/feed'],
  ['Techouse', 'https://developers.techouse.com/feed'],
  ['Tier IV', 'https://medium.com/feed/tier-iv-tech-blog/tagged/tech-blog'],
  ['UIUC News', 'https://news.illinois.edu/rss'],
  ['Uzabase', 'https://tech.uzabase.com/feed'],
  ['Visional', 'https://engineering.visional.inc/blog/index.xml'],
  ['Voicy', 'https://medium.com/feed/voicy-engineering'],
  ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
  ['YOUTRUST', 'https://tech.youtrust.co.jp/feed'],
  ['Yappli', 'https://tech.yappli.io/feed'],
  ['ZOZO', 'https://techblog.zozo.com/feed'],
  ['dely', 'https://tech.dely.jp/feed'],
  ['ecbeing', 'https://blog.ecbeing.tech/feed'],
  ['estie', 'https://www.estie.jp/blog/feed'],
  ['for Startups', 'https://tech.forstartups.com/feed'],
  ['freee', 'https://developers.freee.co.jp/feed'],
  ['gaudiy', 'https://techblog.gaudiy.com/feed'],
  ['hacomono', 'https://techblog.hacomono.jp/feed'],
  ['jig.jp', 'https://note.com/jigjp_engineer/rss'],
  ['kickflow', 'https://tech.kickflow.co.jp/feed'],
  ['newmo', 'https://tech.newmo.me/feed'],
  ['note', 'https://engineerteam.note.jp/m/m70da42dac8cf/rss'],
  ['stand.fm', 'https://note.com/standfm_company/rss'],
  ['あすけん', 'https://tech.asken.inc/feed'],
  ['くらしのマーケット', 'https://tech.curama.jp/feed'],
  ['ぐるなび', 'https://developers.gnavi.co.jp/feed'],
  ['さくら', 'https://knowledge.sakura.ad.jp/feed/'],
  ['じげん', 'https://overs.zigexn.co.jp/technology/feed/'],
  ['みてね', 'https://team-blog.mitene.us/feed'],
  ['アスクル', 'https://tech.askul.co.jp/feed'],
  ['アソビュー', 'https://tech.asoview.co.jp/feed'],
  ['イタンジ', 'https://tech.itandi.co.jp/feed'],
  ['インターステラ', 'https://blog.interstellar.co.jp/feed/'],
  ['ウイングアーク１ｓｔ', 'https://note.wingarc.com/m/m1d39b8a5d9be/rss'],
  ['エキサイト', 'https://tech.excite.co.jp/feed'],
  ['エス・エム・エス', 'https://tech.bm-sms.co.jp/feed'],
  ['エニグモ', 'https://tech.enigmo.co.jp/feed'],
  ['エブリー', 'https://tech.every.tv/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['エムティーアイ', 'https://tech.mti.co.jp/feed'],
  ['オイシックス・ラ・大地', 'https://creators.oisixradaichi.co.jp/feed'],
  ['カウシェ', 'https://note.com/kauche/m/meb1f972d92dc/rss'],
  ['カカクコム', 'https://kakaku-techblog.com/feed'],
  ['金沢工業大学', 'https://www.kanazawa-it.ac.jp/kitnews/rss.xml'],
  ['カヤック', 'https://techblog.kayac.com/feed'],
  ['カンムテック', 'https://tech.kanmu.co.jp/feed'],
  ['クックパッド', 'https://techlife.cookpad.com/feed'],
  ['クラウドワークス', 'https://engineer.crowdworks.jp/feed'],
  ['クラシコム', 'https://note.com/kurashicom_tech/rss'],
  ['コインチェック', 'https://tech.coincheck.blog/feed'],
  ['コドモン', 'https://tech.codmon.com/feed'],
  ['コネヒト', 'https://tech.connehito.com/feed'],
  ['コミューン', 'https://tech.commmune.jp/feed'],
  ['コロプラ', 'https://blog.colopl.dev/feed'],
  ['サイバーエージェント SGEコア技術本部', 'https://blog.sge-coretech.com/feed'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  ['サイボウズ', 'https://blog.cybozu.io/feed'],
  ['サントリーウエルネス', 'https://wellness-tech.suntory.co.jp/index.xml'],
  ['サーバーワークス', 'https://blog.serverworks.co.jp/feed'],
  ['スタディサプリ', 'https://blog.studysapuri.jp/feed'],
  ['スタディスト', 'https://studist.tech/feed'],
  ['スタメン', 'https://tech.stmn.co.jp/feed'],
  ['スタンバイ', 'https://techblog.stanby.co.jp/feed'],
  ['ストックマーク', 'https://tech.stockmark.co.jp/index.xml'],
  ['スパイダープラス', 'https://techblog.spiderplus.co.jp/feed'],
  ['スマートキャンプ', 'https://tech.smartcamp.co.jp/feed'],
  ['タイマーズ', 'https://techblog.timers-inc.com/feed'],
  ['タイミー', 'https://tech.timee.co.jp/feed'],
  ['ダイニー', 'https://note.com/dinii/m/mf6424286cfa2/rss'],
  ['トヨクモ', 'https://tech.toyokumo.co.jp/feed'],
  ['トラストバンク', 'https://tech.trustbank.co.jp/feed'],
  ['トレタ', 'https://tech.toreta.in/feed'],
  ['ドリコム', 'https://tech.drecom.co.jp/feed/'],
  ['ドワンゴ', 'https://dwango.github.io/index.xml'],
  ['ドワンゴ教育サービス', 'https://blog.nnn.dev/feed'],
  ['ナレッジワーク', 'https://note.com/knowledgework/rss'],
  ['ニフティ', 'https://engineering.nifty.co.jp/feed'],
  ['ニフティライフスタイル', 'https://tech.niftylifestyle.co.jp/feed'],
  ['ハートビーツ', 'https://heartbeats.jp/hbblog/atom.xml'],
  ['バイセル', 'https://tech.buysell-technologies.com/feed'],
  ['パーソルキャリア', 'https://techtekt.persol-career.co.jp/feed'],
  ['パーソルプロセス＆テクノロジー', 'https://note.com/ppt_hr/m/md77242321979/rss'],
  ['ヒストリア', 'https://historia.co.jp/feed/'],
  ['ビザスク', 'https://tech.visasq.com/feed'],
  ['ビットバンク', 'https://tech.bitbank.cc/rss/'],
  ['ピクシブ', 'https://inside.pixiv.blog/feed'],
  ['ピクスタ', 'https://texta.pixta.jp/feed'],
  ['フェンリル', 'https://engineers.fenrir-inc.com/feed'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  ['フリュー', 'https://tech.furyu.jp/feed'],
  ['フリークアウト', 'https://backyard.fout.co.jp/feed/'],
  ['フレクト', 'https://cloud.flect.co.jp/feed'],
  ['ブックウォーカー', 'https://developers.bookwalker.jp/feed'],
  ['プラチナゲームズ', 'https://www.platinumgames.co.jp/official-blog/feed/'],
  ['ホワイトプラス', 'https://blog.wh-plus.co.jp/feed'],
  ['マネックス', 'https://blog.tech-monex.com/feed'],
  ['マネーフォワード ', 'https://moneyforward-dev.jp/feed'],
  ['ミクシィ', 'https://mixi-developers.mixi.co.jp/feed'],
  ['メドピア', 'https://tech.medpeer.co.jp/feed'],
  ['メドレー', 'https://developer.medley.jp/rss.xml'],
  ['モノグサ', 'https://tech.monoxer.com/feed'],
  ['モノタロウ', 'https://tech-blog.monotaro.com/feed'],
  ['モバイルファクトリー', 'https://tech.mobilefactory.jp/feed'],
  ['ユニファ', 'https://tech.unifa-e.com/feed'],
  ['ユニラボ', 'https://note.proni.co.jp/m/mc84cf9468445/rss'],
  ['ユビレジ', 'https://note.com/ubiregi/m/madc9f4f38ad9/rss'],
  ['ラクス', 'https://tech-blog.rakus.co.jp/feed'],
  ['ラクスフロントエンドチーム', 'https://note.com/rakus_fe/m/m653605948abe/rss'],
  ['ラクスル', 'https://techblog.raksul.com/feed'],
  ['ラクーン', 'https://techblog.raccoon.ne.jp/feed'],
  ['ラック', 'https://devblog.lac.co.jp/feed'],
  ['ランサーズ', 'https://engineer.blog.lancers.jp/feed/'],
  ['リーナー', 'https://developer.leaner.co.jp/feed'],
  ['レアゾン', 'https://techblog.reazon.jp/feed'],
  ['レコチョク', 'https://techblog.recochoku.jp/feed/atom'],
  ['レバレジーズ', 'https://tech.leverages.jp/feed'],
  ['レブコム', 'https://tech.revcomm.co.jp/feed'],
  ['ログラス', 'https://prd-blog.loglass.co.jp/feed'],
  ['ワンキャリア', 'https://note.com/dev_onecareer/rss'],
  ['ワンダープラネット', 'https://developers.wonderpla.net/feed'],
  ['一休', 'https://user-first.ikyu.co.jp/feed'],
  ['富士通研究所', 'https://blog.fltech.dev/feed'],
  ['弁護士ドットコム', 'https://creators.bengo4.com/feed'],
  ['弥生', 'https://tech-blog.yayoi-kk.co.jp/feed'],
  ['日本ビジネスシステムズ', 'https://blog.jbs.co.jp/feed'],
  ['朝日新聞社', 'https://note.com/asahi_ictrad/rss'],
  ['東京ガス内製開発チーム', 'https://tech-blog.tokyo-gas.co.jp/feed'],
  ['楽天コマース', 'https://commerce-engineer.rakuten.careers/feed/category/%E3%83%86%E3%83%83%E3%82%AF'],
  ['永和システムマネジメント', 'https://blog.agile.esm.co.jp/feed'],
  ['電通総研', 'https://tech.dentsusoken.com/feed'],
  ['食べチョク', 'https://tech.tabechoku.com/feed'],
  ['食べログ', 'https://tech-blog.tabelog.com/feed'],
  ['ＦＦＲＩセキュリティ', 'https://engineers.ffri.jp/feed'],
  ['ヘンリー', 'https://dev.henry.jp/feed'],
  ['HENNGE', 'https://blog.smtps.jp/feed'],
  [
    'HapInS Developers Blog',
    'https://blog.hapins.net/feed/category/%E3%83%86%E3%83%83%E3%82%AF%E3%83%96%E3%83%AD%E3%82%B0',
  ],
  ['豆蔵デベロッパーサイト', 'https://developer.mamezou-tech.com/feed'],
  ['机器人大讲堂', 'https://www.leaderobot.com/news/type-list'],
  ['IEEE Spectrum Video Friday', 'https://spectrum.ieee.org/tag/video-friday'],
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
