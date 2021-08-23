const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/info", (req, res) => {
  res.send("info 입니다.");
});

app.listen(port, () => {
  console.log("qpong의 홈페이지 서버가 돌아가고 있습니다");
});
