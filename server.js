import express from "express";
import http from "http";
import morgan from "morgan";
import { dirname } from "path";
import bodyParser from "body-parser";
import dishRouter from "./routes/dishRouter.js";
import leaderRouter from "./routes/leaderRouter.js";
import promoRouter from "./routes/promoRouter.js";
const app = express();

const host = "localhost";
const port = 3000;
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/dishes", dishRouter);
app.use("/leaders", leaderRouter);
app.use("/promotions", promoRouter);

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log("Server is running on port 3000");
});
