//Mongoose models allow us to access data from MongoDB in an object-oriented fashion.
// The first step to creating a model is defining the schema for it.
//Then, we'll need to register the model with Mongoose so that we can use it throughout our application.


const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);