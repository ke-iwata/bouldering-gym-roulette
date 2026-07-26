# 🧗 ボルダリングジム ルーレット

明日行く都内のボルダリングジムをルーレットで決める Web アプリ。

- ジム候補一覧からチェックボックスで候補を選択・確定
- ルーレットを回すとアニメーション付きで 1 件が決定
- 当選ジムの公式サイト・Googleマップ(営業時間/料金の確認)へのリンクを表示
- ジムの自由追加が可能(追加ジム・選択状態は localStorage に保存)
- クライアントのみで完結(サーバー不要)

## ジムデータについて

[src/data/gyms.ts](src/data/gyms.ts) に静的に保持しています。掲載ジムは Rocky / Base Camp / PUMP / Fish and Bird / NOBOROCK の5系列の都内店舗で、2026年7月時点の各系列公式サイトの店舗一覧をもとにしています。店舗情報(ジム名・エリア・公式URL)は事実情報のみを自前で整理したもので、特定サイトのデータベースの複製は行っていません。

## ローカルでの動作確認

```bash
npm install
npm run dev
```

http://localhost:5173 で確認できます。

本番ビルドの確認:

```bash
npm run build
npm run preview
```

## GitHub Pages へのデプロイ

`main` ブランチへ push すると GitHub Actions([.github/workflows/deploy.yml](.github/workflows/deploy.yml))が自動でビルドして GitHub Pages に公開します。

初回のみリポジトリ側の設定が必要です:

1. GitHub にリポジトリを作成して push
2. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に変更

`vite.config.ts` で `base: './'` を指定しているため、リポジトリ名に関係なくそのまま動作します。
