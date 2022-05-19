const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const productsRouter = require("./src/routers/productsRouter");
const usersRouter = require('./src/routers/usersRouter')
const logMiddleware = require("./src/middleware/log");
const cookieMiddleware = require("./src/middleware/cookie");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({ secret: 'super-secret', resave: true, saveUninitialized: true }))
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(methodOverride("_method"));
app.use(logMiddleware);
app.use(cookieMiddleware)

app.use("/products", productsRouter);
app.use("/", usersRouter);

app.listen(port, () =>
  console.log(`O servidor está sendo executado na porta ${port}`)
);
