const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const productsRouter = require("./src/routers/productsRouter");
const logMiddleware = require("./src/middleware/log");
const authMiddleware = require("./src/middleware/auth");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(methodOverride("_method"));
app.use(logMiddleware);

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", authMiddleware);

app.listen(port, () =>
  console.log(`O servidor está sendo executado na porta ${port}`)
);
