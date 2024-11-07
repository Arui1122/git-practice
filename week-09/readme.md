# Web Server Troubleshooting Post-mortem Report

## 問題描述

在一台運行 Ubuntu 24.04.1 LTS 的 EC2 實例上，nginx web server 無法正常運作。使用`curl localhost`測試時，顯示一個假的 web server 回應：

```
Haha, I am the fake web server. Try to find the real web server!
```

## 初始狀態檢查

### 1. 系統資源狀態

初始檢查發現系統硬碟空間幾乎耗盡：

```bash
df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       6.8G  6.7G  3.9M 100% /  # 關鍵問題：磁碟空間已滿
```

### 2. 服務狀態檢查

```bash
# 檢查80端口佔用情況
sudo lsof -i :80
COMMAND PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
srv     575 root    3u  IPv6   6686      0t0  TCP *:http (LISTEN)

# 檢查nginx狀態
sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded
     Active: inactive (dead)  # nginx未運行
```

### 3. 配置文件檢查

嘗試查看 nginx 配置文件，發現一個語法錯誤：

```nginx
events {
    worker_connections 768;;  # 多了一個分號
}
```

## 問題診斷

1. **主要問題**:

   - 磁碟空間耗盡（100%使用率）
   - nginx 服務未運行
   - 有一個名為"srv"的服務佔用了 80 端口
   - nginx 配置文件中存在語法錯誤

2. **次要問題**:
   - 權限設置問題（web 目錄的訪問權限）

## 解決步驟

### 1. 清理磁碟空間

1. 找出大文件：

```bash
sudo find / -xdev -type f -size +100M
```

發現多個大文件位於`/var/log/system/`：

```
/usr/lib/llvm-18/lib/libLLVM.so.1
/var/log/system/largefile1
/var/log/system/largefile2
/var/log/system/largefile3
/var/log/system/largefile4
```

2. 清理不必要的大文件：

```bash
sudo rm /var/log/system/largefile*
```

清理後磁碟使用率降至 41%：

```bash
df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       6.8G  2.8G  4.0G  41% /
```

### 2. 停止佔用 80 端口的服務

```bash
sudo systemctl stop srv
sudo systemctl disable srv  # 防止開機自動啟動
```

### 3. 修復 nginx 配置

1. 修正 events 區塊中的語法錯誤：

```bash
sudo sed -i 's/768;;/768;/' /etc/nginx/nginx.conf
```

2. 驗證配置文件：

```bash
sudo nginx -t
# 輸出：配置文件語法正確
```

### 4. 設置正確的目錄權限

1. 確保 web 目錄權限正確：

```bash
sudo chown -R www-data:www-data /var/myweb
sudo chmod 755 /var/myweb
sudo chmod 644 /var/myweb/index.html
```

2. 確保日誌目錄權限正確：

```bash
sudo chown -R www-data:www-data /var/log/myweb
sudo chmod -R 755 /var/log/myweb
```

### 5. 啟動和驗證 nginx 服務

1. 啟用並啟動 nginx：

```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

2. 驗證服務狀態：

```bash
sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Active: active (running)
```

3. 測試 web 服務：

```bash
curl localhost
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Troubleshooting 101</title>
  </head>
  <body>
    <h1>Congratulations!</h1>
  </body>
</html>
```

## 技術細節解析

### 1. 系統服務管理

- 使用`systemctl`管理系統服務
- 服務之間的端口衝突處理
- 服務開機自動啟動配置

### 2. nginx 配置管理

- nginx 配置文件語法
- 虛擬主機配置
- 錯誤日誌配置

### 3. Linux 權限管理

- 目錄和文件權限設置
- 所有者(owner)和群組(group)設置
- Web 服務相關權限最佳實踐

### 4. 問題排查工具

- `df`: 磁碟空間檢查
- `lsof`: 端口佔用檢查
- `systemctl`: 服務管理
- `curl`: HTTP 請求測試
- `nginx -t`: nginx 配置測試

## 學習心得

1. **系統化思維**

   - 問題排查需要有系統化的思維，從基礎設施（如磁碟空間）開始檢查
   - 依據錯誤訊息逐步深入調查，而不是盲目嘗試

2. **工具使用**

   - 學習了多種 Linux 診斷工具的使用
   - 理解了各種工具的適用場景和輸出解讀

3. **最佳實踐**

   - 了解了 Web 服務部署的最佳實踐
   - 學習了正確的檔案權限設置
   - 理解了服務管理的重要性

4. **文件重要性**
   - 配置文件的小錯誤可能導致整個服務無法運行
   - 正確的配置文件管理和版本控制的重要性

## 預防措施

1. **監控措施**

   - 建立磁碟空間監控
   - 設置服務狀態監控
   - 配置日誌輪轉（log rotation）

2. **維護建議**
   - 定期檢查系統資源使用情況
   - 實施配置文件變更管理
   - 建立備份和回復機制
