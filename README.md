# Restaurant-forum

## 專案介紹
搭配 handlebars 和 Express 框架，建立餐廳論壇供使用者瀏覽美食資訊，使用者可以依照分類在瀏覽的同時收藏、按讚並且留下評論；使用者也可以追蹤其他使用者，網頁會依照被追蹤人數排列人氣美食家供其他使用者追蹤。

## 初始化
### Initialize
```
git remote add upstream https://github.com/ALPHACamp/forum-express-grading.git  # 建立上游連線
npm install
```

### 設定資料庫
需要與 config/config.json 一致

```
create database forum;
```

### 執行測試
```
npm run test
```

## 共用帳號
* 第一組帳號有 admin 權限：
  * email: root@example.com
  * password: 12345678
* 第二組帳號沒有 admin 權限：
  * email: user1@example.com
  * password: 12345678
