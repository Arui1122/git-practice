1. 說明 Git 中的 Blob, Tree, Commit, Branch, Head
  - Blob：Blob 是 Git 中用來儲存檔案內容的物件。Blob 不會儲存檔案名稱或目錄結構，只會儲存檔案的內容，並透過 SHA-1 hash 值來識別。當我們儲存一個新版本的檔案，Git 會建立一個新的 Blob 物件。
  - Tree：Tree 物件代表目錄結構，並且會指向包含檔案（Blob）或其他目錄（Tree）的物件。每個 Tree 物件記錄了其包含的檔案名稱、檔案型別（blob 或 tree），以及相應的 SHA-1 hash 值。換句話說，Tree 物件是 Git 追蹤檔案和目錄關係的方式。
  - Commit：Commit 是 Git 儲存版本歷史的物件，每次執行 git commit 時，Git 會建立一個 Commit 物件。這個物件指向一個 Tree 物件（代表當前專案的目錄結構和檔案狀態），並且包含作者資訊、時間戳記、以及 commit 訊息。Commit 也可能會指向一個或多個父 commit，形成版本歷史的鏈條。
  - Branch：Branch 是 Git 用來指向某一個特定 commit 的指標。每個 branch 名稱都對應到某一個 commit，當你在該 branch 上進行新的 commit 時，Git 會自動更新這個 branch 來指向最新的 commit。
  - HEAD：HEAD 是 Git 中指向當前檢出的 commit 的指標。通常它會指向某一個 branch，例如 master 或 main。當你進行 commit 或切換 branch 時，HEAD 也會更新以指向新的 commit 或 branch。
2. 
