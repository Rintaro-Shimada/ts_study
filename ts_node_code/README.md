# typescript for node js

init
```shell
npm init -y
```

install typescript 
```shell
npm install typescript --save-dev
```

node の型情報インストール
```shell
npm install @types/node --save-dev
```

TypeScriptの設定ファイルtsconfig.jsonを初期化し
```shell
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

## 自動でコンパイル

Node.jsで実行するためにts-nodeをインストール
```shell
npm install ts-node --save-dev
```

ファイルが変更されるたびにts-nodeを再起動するためにnodemonをインストール
```shell
npm install nodemon --save-dev
```

## 実行

live mode
```shell
npm run start
```

build mode
```shell
npm run build
```