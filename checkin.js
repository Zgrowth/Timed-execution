fetch("https://glados.rocks/api/user/checkin", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6",
    "authorization": "38469444829381712364578724994354-956-1470",
    "content-type": "application/json;charset=UTF-8",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.1.1490942899.1724291334; koa:sess=eyJ1c2VySWQiOjUxNjIyMSwiX2V4cGlyZSI6MTc1MDIxMTM3MDE1NSwiX21heEFnZSI6MjU5MjAwMDAwMDB9; koa:sess.sig=s7cktwyAlzCfV4_yuUNV3Bc3f5A; _ga_CZFVKMNT9J=GS1.1.1724291333.1.1.1724291370.0.0.0"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"token\":\"glados.one\"}",
  "method": "POST"
}).then(res => res.json()).then(data => console.log(data));
