import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/bread", globalController.breadController);

export default globalRouter;