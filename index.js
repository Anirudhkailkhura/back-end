const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors")

dotenv.config();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

 app.use(
    cors({
      origin: "*"
    })
  )



app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('my-app/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'my-app', 'build','index.html')));




app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
