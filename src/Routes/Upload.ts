import { Router } from "express";
import { getFile } from "../Controllers/Upload.controller";
import multerMiddleware from "../Middlewares/File.middle";
import { checkJwt } from "../Middlewares/Session.middle";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };