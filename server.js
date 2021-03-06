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
const { router } = require("./routes/author");

// setup body parsing
app.use(express.json());
app.use(express.urlencoded({limit:'10mb', extended: true }));

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
app.use("/author", router);
app.use("/books/", require("./routes/books"));
app.use("/projects", require("./routes/projects"));

// setup port
app.listen(process.env.PORT,()=>console.log(`server running in port ${process.env.PORT}`));
