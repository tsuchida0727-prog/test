# test

シンプルなマルチページWebサイトのサンプルプロジェクトです。

## ページ構成

| ページ | ファイル | 説明 |
|---|---|---|
| ホーム | `index.html` | トップページ |
| About | `about.html` | サイト紹介ページ |
| Contact | `contact.html` | お問い合わせフォーム |

## 機能

- **ダーク/ライトモード切り替え** — ナビバー右端のボタンで切り替え可能。設定は `localStorage` に保存され、次回訪問時も維持される
- **スティッキーナビゲーション** — スクロールしてもナビバーが画面上部に固定される
- **レスポンシブレイアウト** — `min()` 関数を使ったコンテナ幅制御により、スマートフォンからデスクトップまで対応

## 使い方

クローン後、`index.html` をブラウザで開くだけで動作します（サーバー不要）。

```bash
git clone https://github.com/tsuchida0727-prog/test.git
cd test
# index.html をブラウザで開く
```

## ファイル構成

```
test/
├── index.html    # ホームページ
├── about.html    # Aboutページ
├── contact.html  # Contactページ
├── style.css     # 共通スタイル（CSS変数でテーマ管理）
└── script.js     # ダーク/ライトモード切り替えロジック
```

## 使用技術

- **HTML5**
- **CSS3** — CSS Custom Properties（変数）、`backdrop-filter`、`radial-gradient`
- **JavaScript** （バニラJS、フレームワーク不使用）
- **localStorage** — テーマ設定の永続化
