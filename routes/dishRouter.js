import express from "express";
import bodyParser from "body-parser";

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter
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

dishRouter
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
export default dishRouter;
