import express from "express";
import bodyParser from "body-parser";

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter
  .route("/")
  .get((req, res, next) => {
    res.status = 200;
    res.end("get /");
  })
  .post((req, res, next) => {
    res.status = 200;
    res.end("post /" + req.body.msg);
  })
  .put((req, res, next) => {
    res.status = 403;

    res.end("put method is not supported ");
  })
  .delete((req, res, next) => {
    res.status = 200;
    res.end("deleted ");
  });

promoRouter
  .route("/:id")
  .get((req, res, next) => {
    res.status = 200;
    res.end("get /" + req.params.id);
  })
  .post((req, res, next) => {
    res.status = 403;
    res.end("post / not Supported");
  })
  .put((req, res, next) => {
    res.status = 200;

    res.end("updating item " + req.params.id);
  })
  .delete((req, res, next) => {
    res.status = 200;
    res.end("deleted " + req.params.id);
  });
export default promoRouter;
