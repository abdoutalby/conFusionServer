import express from "express";
import http from "http";
import morgan from "morgan";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();

const host = "localhost";
const port = 3000;
app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/", (req, res, next) => {
  res.status = 200;
  res.end("get /");
});

app.get("/:id", (req, res, next) => {
  res.status = 200;
  res.end("get /" + req.params.id);
});

app.post("/", (req, res, next) => {
  res.status = 200;

  res.end("post /" + req.body.msg);
});

app.put("/", (req, res, next) => {
  res.status = 403;

  res.end("put method is not supported ");
});

app.put("/", (req, res, next) => {
  res.status = 200;
  res.end("deleted ");
});
app.use(express.static(dirname + "/public"));
app.use((req, res, next) => {
  res.statusCode = 200;
  res.end("hello ");
});

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Server is running on port 3000");
});
