import cors from "cors";
import express from "express";
import { setupReactViews } from "express-tsx-views";
import helmet from "helmet";
import path from "node:path";
import open from "open";
import { router } from "./routes";
import { Props } from "./views/home";

const port = 3000;

const statics = path.join(__dirname, "./public");

const app = express();

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

const options = {
  viewsDirectory: path.resolve(__dirname, "./views"),
};

setupReactViews(app, options);

app.get("/", (req, res, next) => {
  const data: Props = { title: "Home", port: port.toString() };
  res.render("home", data);
});

app.use(express.json({ limit: "200mb" }));

app.get("/static/index.css", function (req, res) {
  res.sendFile(path.join(statics, "index.css"));
});

app.use("/static", express.static(statics));

app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server started on port:${port}`);
  open(`http://localhost:${port}`);
});
