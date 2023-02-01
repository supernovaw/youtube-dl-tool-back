import express, { Router } from "express";
import cors from "cors";
import auth from "./routes/auth";

const baseRouter = Router();
baseRouter.use("/auth", auth);

const port = process.env.PORT || 44393;
const baseUrl = process.env.BASE_URL || "/youtube-dl-tool/api";
const origin = process.env.ORIGIN || "http://localhost";

const app = express();
app.use(cors({ origin }));
app.use(express.json());
app.use(baseUrl, baseRouter);
app.listen(port, () => console.log(`youtube-dl-tool-back :${port} started`));
