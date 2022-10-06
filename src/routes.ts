import { Router } from "express";
import { hello } from "./controllers/hello";

const router = Router();

router.get("/hello", hello);

export { router };
