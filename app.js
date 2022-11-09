const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
//const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//require
 
const users = require("./routes/users")
const astrologer = require("./routes/astrologer")
const admin = require("./routes/admin")
const aboutus = require("./routes/aboutus")
const terms_condition = require("./routes/terms_condition")
const contact_us = require("./routes/contact_us")
const banner = require("./routes/banner")
const faq = require("./routes/faq")
const blogs = require("./routes/blogs")
const privacy_policy = require("./routes/privacy_policy")
const notification = require("./routes/notification")
const category = require("./routes/category")
const rashi = require("./routes/rashi")
const rashihoroscope = require("./routes/rashihoroscope")
const review = require("./routes/review")
const catHoroscope = require("./routes/catHoroscope")
const product = require("./routes/product")
const productcategory = require("./routes/productcategory")
const rashiImg = require("./routes/rashiImg")
const astroproduct = require("./routes/astroproduct")
const cart = require("./routes/cart")
const shipping_adrss = require("./routes/shipping_adrss")
const chat_intake_form = require("./routes/chat_intake_form")
const plan = require("./routes/plan")
const recharge_plan = require("./routes/recharge_plan")
const blog_category = require("./routes/blog_category")


//use
app.use("/", users);
app.use("/", astrologer);

app.use("/", admin);
app.use("/", aboutus);
app.use("/", terms_condition);
app.use("/", contact_us);
app.use("/", banner);
app.use("/", faq);
app.use("/", blogs);
app.use("/", privacy_policy);
app.use("/", notification);
app.use("/", category);
app.use("/", rashi);
app.use("/", rashihoroscope);
app.use("/", review);
app.use("/", catHoroscope);
app.use("/", product);
app.use("/", productcategory);
app.use("/", rashiImg);
app.use("/", astroproduct);
app.use("/", cart);
app.use("/", shipping_adrss);
app.use("/", chat_intake_form);
app.use("/", plan);
app.use("/", recharge_plan);
app.use("/", blog_category);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

//console.log(process.env.DB);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCEFULLY");
  })
  .catch((error) => {
    console.log(error);
  });
  

app.listen(process.env.PORT || 8000, () => {
  console.log("Example app listening on port 8000");
});

//    http://localhost:5000/admin
