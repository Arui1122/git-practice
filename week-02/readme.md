# Node.js 安裝指南和版本選擇說明

## 安裝的 Node.js 版本

建議安裝 Node.js 的長期支持版本（LTS, Long Term Support）。截至2024年9月，最新的 LTS 版本是 20.17.0。

### 為什麼選擇 LTS 版本？

1. 穩定性：LTS 版本經過長期測試，bug 較少，更適合生產環境。

2. 安全性：LTS 版本會持續接收重要的安全更新。

3. 兼容性：大多數 npm 包和工具都會優先支持 LTS 版本。

4. 長期支持：LTS 版本通常有較長的維護週期（約 30 個月）。

## 使用 nvm 管理 Node.js 版本

建議使用 Node Version Manager (nvm) 來安裝和管理 Node.js。

### nvm 的優點：

1. 輕鬆切換不同 Node.js 版本

2. 避免權限問題

3. 方便安裝和卸載不同版本

## nvm 與 npm 的區別

### nvm (Node Version Manager)

- 用於管理多個 Node.js 版本

- 允許在同一台機器上安裝和切換不同版本的 Node.js

### npm (Node Package Manager)

- Node.js 的 defalut package manager

- 用於安裝、共享和管理 JavaScript package/module

- 每個 Node.js 版本都會附帶一個 npm 版本

## (Optional) 其他 JavaScript 運行時選擇

如果選擇不使用 Node.js，可以考慮以下選項：

1. Deno：

   - 優點：內置 TypeScript 支持，安全性更高

   - 缺點：生態系統相對較小，與 Node.js 不完全兼容

2. Bun：

   - 優點：啟動速度快，性能優異

   - 缺點：仍在開發中，可能存在兼容性問題

