import fs from "fs";
import { Router } from "express";
const router = Router();

let authorisedKeys: string[] = fs
    .readFileSync("authorised-keys", "utf8")
    .split("\n")
    .filter(s => s.length > 3);

router.post("/", (req, res) => {
    res.json({ valid: checkKey(req.body.key) });
});

function checkKey(key: any): boolean {
    if (typeof key !== "string") return false;
    return authorisedKeys.includes(key);
}

export default router;
