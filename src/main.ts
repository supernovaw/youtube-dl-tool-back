import express, { Router } from "express";
import auth from "./routes/auth";

const baseRouter = Router();
baseRouter.use("/auth", auth);

const port = process.env.PORT || 44393;
const baseUrl = process.env.BASE_URL || "/youtube-dl-tool/api";
const app = express();
app.use(express.json());
app.use(baseUrl, baseRouter);
app.listen(port, () => console.log(`youtube-dl-tool-back :${port} started`));
