const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// init app
const app = express();
// load config
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env" });
}
// routes
// const indexRouter = require("./routes/index");

// set view & view & layout
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// setup mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// setup routes
// app.use("/", indexRouter);
app.use("/", require("./routes/index"));

// setup port
app.listen(process.env.PORT || 3000);
