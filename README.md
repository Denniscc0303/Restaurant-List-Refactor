# 我的餐廳清單

一個使用 Node.js + Express 打造的餐廳美食網站，提供使用者管理自己的餐廳清單，如新增、修改、刪除、瀏覽餐廳資料等功能，並且可依照餐廳名稱進行搜尋。

## 專案畫面

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A6%20%E6%89%93%E9%80%A0%E9%A4%90%E5%BB%B3%E6%B8%85%E5%96%AECRUD_index_Dennis_20210124.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A6%20%E6%89%93%E9%80%A0%E9%A4%90%E5%BB%B3%E6%B8%85%E5%96%AECRUD_detail_Dennis_20210124.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A6%20%E6%89%93%E9%80%A0%E9%A4%90%E5%BB%B3%E6%B8%85%E5%96%AECRUD_new_Dennis_20210124.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A6%20%E6%89%93%E9%80%A0%E9%A4%90%E5%BB%B3%E6%B8%85%E5%96%AECRUD_edit_Dennis_20210124.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A6%20%E6%89%93%E9%80%A0%E9%A4%90%E5%BB%B3%E6%B8%85%E5%96%AECRUD_search_Dennis_20210124.JPG)

## Features - 產品功能

1. 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
2. 使用者可以依照中文名稱、英文名稱與餐廳類別進行搜尋
3. 使用者可以新增一家餐廳
4. 使用者可以瀏覽一家餐廳的詳細資訊
5. 使用者可以瀏覽全部所有餐廳
6. 使用者可以修改一家餐廳的資訊
7. 使用者可以刪除一家餐廳

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Denniscc0303/Restaurant-List-CRUD.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd Restaurant-List-CRUD
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 匯入種子檔案

```
執行 npm run seed 匯入使用者與餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb connected!

done
```

5. 啟動伺服器，執行 app.js 檔案

```
node app.js
```

6. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is listening on localhost:3000

Mongodb connected!
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用我的餐廳清單。

## Contributor - 專案開發人員

> [Dennis Chen](https://github.com/Denniscc0303)