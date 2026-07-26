# 🧗 ボルダリングジム ルーレット

明日行く都内のボルダリングジムをルーレットで決める Web アプリ。

- ジム候補一覧からチェックボックスで候補を選択・確定
- ルーレットを回すとアニメーション付きで 1 件が決定
- ジムの自由追加が可能(追加ジム・選択状態は localStorage に保存)
- クライアントのみで完結(サーバー不要)

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
