import express, { Application, Request, Response } from "express";
import path from "path";
import cors from "cors";
import getJsonData from "./utils/getJsonToObj";

const PORT = 3001;

const app: Application = express();

app.use(cors());

app.get("/locations", (req: Request, res: Response) => {
  getJsonData(path.join(__dirname, "../locations.json")).then((locations) =>
    res.send(locations)
  );
});

app.listen(PORT, () => console.log("Server running"));
