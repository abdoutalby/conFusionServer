import express from "express";
import http from "http";
const app = express();

const host = "localhost";
const port = 3000;

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.end("hello ");
});

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Server is running on port 3000");
});
