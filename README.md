# <img src="src/site/images/icon-transparent.png" height=26> AI・ロボティクス技術ニュース RSS
AI・ロボティクスに関連するテック情報や主要なAI研究機関、ロボティクス専門誌の更新をまとめたRSSフィードを配信しています。
最新の技術動向や研究情報をいち早くキャッチアップすることを目的としています。

https://takashinnosuke.github.io/slack_AI_news_bot/


独自のフィードを作って公開したい場合は自由にフォークしてください。

## サイト追加の方針
AI・ロボティクス分野に関わる主要な研究機関、企業テックブログ、および専門メディアのフィードを対象としています。
たどり着いた一次情報のソースや、非常に質の高い技術情報のキャッチアップを重視して厳選しています。

## サイトの追加方法
[src/resources/feed-info-list.ts](https://github.com/takashinnosuke/slack_AI_news_bot/blob/main/src/resources/feed-info-list.ts) で管理しています。

### AIエージェントによるフィードの追加

Claude Code, Cursor, Codex, Copilot Agent などを利用して、フィードの追加からプルリク作成まで自動で行うことができます。

1. このリポジトリをフォーク
2. 以下のようにAIエージェントに送り、そのまま指示に従ってください。
  ```
  フィードを追加したい
  ```

### プルリクでの送り方
もしプルリクを送っていただける場合は以下のように作成できます。

1. このリポジトリをフォーク
2. ブランチ作成
   `git checkout -b new-blog-feed-xxx`
3. フィードを追加
   `src/resources/feed-info-list.ts` の `FEED_INFO_LIST` を更新
4. コミット
   `git commit -am 'chore(feed): <企業名など> 追加`
5. プッシュ
   `git push origin new-blog-feed-xxx`
6. プルリクを作成

## 開発

### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日 8時-24時の1時間おき
- 休日 8時-24時の2時間おき

### フォークして使う場合
以下を書き換えると独自のサイトが動きます。

- `src/common/constants.js` の URL など
- `src/resources/feed-info-list.ts` のブログ情報

特定のブログに絞ったり、以下のように全く違ったフィードを作るもの良いと思います。

- [MATLAB-blog-rss-feed](https://github.com/minoue-xx/MATLAB-blog-rss-feed) ... MATLAB/Simulink 関連ブログの更新をまとめたRSSフィードを配信

### 開発環境とコマンド
環境
- Node.js >= 20

パッケージのインストール
```bash
$ npm install
```

フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ npm run feed-generate

$ # localhost:8080 で確認
$ npm run site-serve
```

コードのチェック
```bash
$ # eslint, tsc --noEmit
$ npm run lint

$ # テスト
$ npm run test
```

## ライセンス
MIT
