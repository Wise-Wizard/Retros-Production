const mongoose = require("mongoose");

const reviewModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },

    name: {
      type: String,
    },

    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    description: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    countInStock: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: false,
    },

    numReviews: {
      type: Number,
      reqired: false,
    },

    reviews: [reviewModel],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product, productSchema };
