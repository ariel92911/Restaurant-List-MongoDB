# Restaurant-List(MongoDB)
一個簡易的餐廳清單網站，連結資料庫並加上 CRUD 的功能！可以直接在網站上新增、修改與刪除餐廳！


## Installing
1. 打開終端機


2. 下載 Restaurant-List-MongoDB 資料夾 ( 下載位置會依你打開終端機的位置而定 )

```
$ git clone https://github.com/ariel92911/Restaurant-List-MongoDB.git
```

3. 請在 https://developers.facebook.com/ 申請第三方登入用的金鑰

4. 在本檔案的跟目錄新增 .env 的檔案，並輸入以下程式碼
```
FACEBOOK_ID = <輸入FB ID>
FACEBOOK_SECRET = <輸入FB SECRET>
FACEBOOK_CALLBACK=http://www.example.com/auth/facebook/callback 
```

5. 進入 Restaurant-List-MongoDB 資料夾
```
$ cd Restaurant-List-MongoDB
```

6. 安裝npm套件
```
$ npm install
```

7. 至 .\Restaurant-Llis with MongoDB\models\seeds 資料夾，執行以下指令，以新增種子資料
```
$ node restaurantSeeder.js
```

8. 回到根目錄，執行專案
```
$ npm run dev
```

9. 在瀏覽器輸入以下網址以使用 Restaurant-List-MongoDB
```
http://localhost:3000
```

## 種子資料
1. 第一位使用者：

+ email: user1@example.com

+ password: 12345678

+ 擁有 #1, #2, #3 號餐廳

2. 第二位使用者：

+ email: user2@example.com

+ password: 12345678

+ 擁有 #4, #5, #6 號餐廳


## How to use
*使用者可以新增一家餐廳

*使用者可以瀏覽一家餐廳的詳細資訊

*使用者可以瀏覽全部所有餐廳

*使用者可以修改一家餐廳的資訊

*使用者可以刪除一家餐廳

*使用者可以搜尋餐廳

*使用者可以改變餐廳排序


