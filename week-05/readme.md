# Week 5 作業說明

## 1. 個人網站網址

https://www.nccu-cloud.me

## 2. 網域購買來源

我是在 Namecheap 購買網域。

## 3. DNS A Record 說明

A Record（Address Record）是 DNS 紀錄中最基本的類型，它的功能是將域名對應到一個 IPv4 位址。

例如：

```
www.example.com.    IN    A    123.456.789.10
```

這表示當使用者訪問 www.example.com 時，DNS 伺服器會將請求導向 IP 位址 123.456.789.10。

## 4. DNS NS Record 說明

NS Record（Name Server Record）用於指定域名的授權 DNS 伺服器。這些記錄指出哪些 DNS 伺服器負責管理該域名的 DNS 記錄。

例如：

```
example.com.    IN    NS    ns1.example.com.
example.com.    IN    NS    ns2.example.com.
```

## 5. Domain Name、FQDN 與 URL 的比較

### Domain Name（域名）

- 網站的可讀名稱
- 例如：example.com
- 不包含協議（http/https）和路徑

### FQDN (Fully Qualified Domain Name)

- 完整的域名，包含所有子域名層級
- 以點號結尾（在實際使用時通常省略）
- 例如：www.example.com.
- 包含主機名稱（如 www）+ 域名

### URL (Uniform Resource Locator)

- 完整的網路資源位址
- 包含協議、域名、路徑等
- 例如：https://www.example.com/path/page.html
- 可能包含查詢參數

## 6. 為什麼需要 HTTPS 憑證？

使用 HTTPS（配合 SSL/TLS 憑證）而不是單純的 HTTP 有以下重要原因：

1. **安全性**

   - 加密傳輸的資料，防止中間人攻擊
   - 保護使用者的隱私資訊（如登入憑證、信用卡資料等）

2. **身分驗證**

   - 向使用者證明網站的真實性
   - 防止釣魚網站的詐騙行為

3. **數據完整性**

   - 確保資料在傳輸過程中未被竄改
   - 驗證資料來源的可靠性

4. **SEO 優勢**

   - Google 將 HTTPS 作為搜尋排名的因素之一
   - 提升網站在搜尋引擎中的排名

5. **瀏覽器支援**

   - 現代瀏覽器對 HTTP 網站會顯示「不安全」警告
   - 某些新的網頁功能僅支援 HTTPS

6. **使用者信任**
   - 增加使用者對網站的信任度
   - 提升網站的專業形象
