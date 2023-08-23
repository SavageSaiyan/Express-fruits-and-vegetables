require("dotenv").config();
const express = require("express");
const app = express();
const Fruit = require("./models/fruit.js");
const Vegetable = require("./models/vegetable.js");
const mongoose = require("mongoose");

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // remove useCreateIndex: true
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

//Setting up view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//MIDDLEWARE
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//this allows the body of a post request
app.use(express.urlencoded({ extended: false }));

//ROUTES
//index
app.get("/fruits", async function (req, res) {
  const foundFruits = await Fruit.find({});
  res.render("fruits/Index", {
    fruits: foundFruits,
  });
});

//New
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

//CREATE = POST
app.post("/fruits", async (req, res) => {
  console.log("The created fruit", req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  // console.log("The fruits array" , fruits)
  const createdFruit = await Fruit.create(req.body);
  console.log(createdFruit);
  res.redirect("/fruits");
});

//show
app.get("/fruits/:id", async (req, res) => {
  const oneFruit = await Fruit.findById(req.params.id);
  res.render("fruits/Show", {
    fruit: oneFruit,
  });
});

// Index
app.get("/vegetable", async function (req, res) {
  const foundVegetables = await Vegetable.find({});
  res.render("veggies/Index", {
    vegetables: foundVegetables,
  });
});

//New
app.get("/vegetable/new", (req, res) => {
  res.render("veggies/New");
});

//CREATE = POST
app.post("/vegetable", async (req, res) => {
  console.log("The created vegetable", req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const createdVegetable = await Vegetable.create(req.body);
  console.log(createdVegetable);
  res.redirect("/vegetable");
});

//show
app.get("/vegetable/:id", async (req, res) => {
  const oneVegetable = await Vegetable.findById(req.params.id);
  res.render("veggies/Show", {
    vegetables: oneVegetable,
  });
});

app.listen(3000, () => {
  console.log("listening");
});
