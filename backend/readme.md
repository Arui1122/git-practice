### 1. package.json 中的 dependencies 與 devDependencies 分別是什麼？

- **dependencies**: 專案運行時必需的套件
- **devDependencies**: 開發過程中需要，但不影響程式運行的套件（如測試工具）

### 2. package.json 中的 scripts 這個區塊怎麼用？

- 用於定義可執行的腳本命令，例如：

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

- 可以用 `npm run <script-name>` 執行，如 `npm run start`

### 3. Port number 要怎麼以環境變數來設定？

- 在 app.js 中使用 `process.env.PORT`
- 啟動時設定環境變數: `PORT=3000 node app.js`

### 4. 關於哪些檔案應該要被放上 github repo:

- 應上傳: package.json, app.js, README.md 等源碼和設定檔
- 不應上傳: node_modules/ (可被重新安裝), .env (包含敏感資訊)
- 決策要素: 是否為專案必要, 是否包含敏感資訊, 是否可重新生成

### 5. require 和 import/export 的區別 (CJS vs ESM):

- CommonJS (CJS): 使用 require() 和 module.exports
- ES Modules (ESM): 使用 import 和 export
- CJS 是 Node.js 的原生模組系統，ESM 是較新的標準

## 進階題

### 1. localhost 是什麼？

- 指本機的 IP 地址，通常是 127.0.0.1
- 用於測試本機上運行的網路服務

### 2. curl 是什麼？如何用來測試網路連線？

- curl 是一個命令列工具，用於傳輸數據
- 基本用法: `curl http://localhost:3000/`
- 常用參數:
  - `-X`: 指定 HTTP 方法 (GET, POST 等)
  - `-H`: 添加 HTTP 標頭
  - `-d`: 發送 POST 數據
