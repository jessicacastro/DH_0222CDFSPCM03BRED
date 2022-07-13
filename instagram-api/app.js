var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");

var indexRouter = require("./routes/index");

var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors())
  next();
});

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(3000, () => console.log("listening on port http://localhost:3000"));
