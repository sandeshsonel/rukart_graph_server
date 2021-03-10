const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: "String", required: true },
    factor: { type: "Number", default: 1 },
    price: { type: "String", default: 0 },
    quantity: { type: "Number", default: true },
    priceRetail: { type: "Number", default: true },
    priceBulk: { type: "Number", default: true },
    minimumBulkQuantity: { type: "Number", default: true },
    unit: { type: "String", required: true },
    image: { type: "String" },
  },
  { timestamps: true }
);

const Item = mongoose.model("Items", itemSchema);

module.exports = Item;
