const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemId: { type: Schema.Types.ObjectId, required: true },
    sellerId: { type: Schema.Types.ObjectId, required: true },
    name: { type: "String" },
    unit: { type: "String" },
    sellerPrimaryPhone: { type: "String" },
    sellerAltPhone: { type: "String" },
    priceBulk: { type: "Number" },
    priceRetail: { type: "number" },
    minimumBulkQuantity: { type: "Number" },
    buyQuantity: { type: "Number", required: true },
    amount: { type: "Number" },
    status: { type: "String", required: true },
    addedBy: { type: Schema.Types.ObjectId, required: true },
    updatedBy: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema({
  items: [itemSchema],
  addedBy: { type: Schema.Types.ObjectId, required: true },
  updatedBy: { type: Schema.Types.ObjectId },
  status: { type: "String" },
});

const Order = mongoose.model("Orders", orderSchema);

module.exports = orderSchema;
