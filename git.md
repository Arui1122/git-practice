1. 說明 Git 中的 Blob, Tree, Commit, Branch, Head
  - Blob：Blob 是 Git 中用來儲存檔案"內容"的物件。Blob 不會儲存檔案名稱或目錄結構，只會儲存檔案的內容，並透過 SHA-1 hash 值來識別。當我們儲存一個新版本的檔案(下 git add 指令)，Git 會建立一個新的 Blob 物件。
  - Tree：Tree 物件代表目錄結構，並且會指向包含檔案（Blob）或其他目錄（Tree）的物件。每個 Tree 物件記錄了其包含的檔案名稱、檔案型別（blob 或 tree），以及相應的 SHA-1 hash 值。也就是說，當我們commit時，tree物件會儲存我們指定的檔名，目錄資訊，並指向相對應的blob物件，簡單來說，當我們使用git add之後，檔案都已經被加到git的資料夾內，而當我們使用git commit時，git只是把這些檔案“指”出來而已！
  - Commit：Commit 是 Git 儲存版本歷史的物件，每次執行 git commit 時，Git 會建立一個 Commit 物件。這個物件指向一個 Tree 物件（代表當前專案的目錄結構和檔案狀態），並且包含作者資訊、時間戳記、以及 commit 訊息。
  - Branch：Branch 是 Git 用來指向某一個特定 commit 的指標。每個 branch 名稱都對應到某一個 commit，如果在某個 branch 上進行新的 commit 時，Git 會自動更新這個 branch 來指向最新的 commit。
  - HEAD：HEAD也只是一個檔案，用來指向當前切換的branch。位於.git資料夾內，有一個名為HEAD的檔案，檔案內就明確說明我們當前位於哪一個branch上面。

2. 紀錄 .git 資料夾的變化
常見的子目錄和檔案的變化有：
- objects/：儲存 Git 的 blob、tree、commit 物件。每個物件以 SHA-1 hash 值命名。當新增檔案、進行 commit 時，這個目錄會增加新的物件。
- refs/：儲存 branch 和 tag 的指標。每個 branch（如 refs/heads/main）都對應到一個 commit 的 hash 值。
- HEAD：這個檔案指出目前檢出的 branch 或 commit。比如說在 main branch 上打 cat .git/HEAD，會出現 ref: refs/heads/main，意思是現在HEAD指向main這個branch。
- index：暫存區的資料。當執行 git add 指令時，暫存區會更新，而這個檔案反映了目前被追蹤但尚未 commit 的變更。

3. Commit Message 的寫法與 Style

  自己最常用
  
- git commit -m "feat: 增加搜尋功能"
- git commit -m "fix: 修正使用者登入的錯誤"

  之類的
