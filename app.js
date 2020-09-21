var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var routes = require("./routes/theQ");
var app = express();

var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors());

// DB SETUP
MONGOLAB_URI = process.env.MONGOLAB_URI_THEQ;

mongoose
  .connect(MONGOLAB_URI, { promiseLibrary: require("bluebird") })
  .then(() => console.log("connection succesful"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/qaa", express.static(path.join(__dirname, "dist")));
app.use("/todo", express.static(path.join(__dirname, "dist")));
app.use("/words", express.static(path.join(__dirname, "dist")));
app.use("/about", express.static(path.join(__dirname, "dist")));
app.use("/blog", express.static(path.join(__dirname, "dist")));
app.use("/login", express.static(path.join(__dirname, "dist")));
app.use("/register", express.static(path.join(__dirname, "dist")));
app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
