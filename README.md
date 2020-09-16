# 餐廳清單
卡片式條列各式餐廳，涵蓋料理類型、餐廳評分等，點選進入餐廳頁面可了解更多關於餐廳的詳細資訊與簡介。

## 功能
1.0 功能：
- 顯示餐廳詳細資訊，如地址、聯絡電話等
- 顯示餐廳評分
- 搜尋特定餐廳

2.0 新增功能：
- 點選首頁右上方Create連結，使用者可以自行新增餐廳
- 使用者可以自行編輯餐廳資訊
- 使用者可以刪除特定餐廳

3.0 新增功能：
- 增加sort選單，可由名稱、評分高低排序餐廳

### 使用工具
- mongodb 4.2.9
- mongoose 5.10.3
- nodemon 2.0.4
- Node.js 10.22.0
- Express 4.17.1
- Express-handlebars 5.1.0
- body-parser 1.19.0

### 安裝與使用方法

- 下載專案
`https://github.com/chienan/restaurant_list.git`

- 安裝Node Package Manager
`npm install`

- 新增種子資料
`npm run seed`

- 使用nodemon啟動伺服器／正常啟動
`npm run dev / npm start`