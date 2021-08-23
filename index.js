var http = require("http");
const { join } = require("path");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/code") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const code = JSON.stringify([
        {
          code: 123,
          name: "minji",
        },
      ]);
      res.end(code);
    }
  }
});

server.listen(port, hostname);

console.log("qpong server on !");
