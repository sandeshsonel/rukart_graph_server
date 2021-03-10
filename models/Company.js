const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemId: { type: Schema.Types.ObjectId },
  quantity: { type: "Number", default: 0 },
  priceRetail: { type: "Number", default: null },
  priceBulk: { type: "Number", default: null },
  harvestDate: { type: "Date", default: null },
  minimumBulkQuantity: { type: "Number", default: null },
  updatedBy: { type: Schema.Types.ObjectId },
  image: { type: String },
});

const addressSchema = new mongoose.Schema({
  homeAddress: { type: "String", default: "" },
  city: { type: "String", default: "" },
  state: { type: "String", default: "" },
  zip: { type: "Number", default: null },
});

const companySchema = new mongoose.Schema({
  name: { type: "String", required: true },
  emailMain: { type: "String", default: "" },
  emailAlt: { type: "String", default: "" },
  phoneMain: { type: "String", default: "" },
  phoneAlt: { type: "String", default: "" },
  type: {
    type: String,
    enum: ["Trader", "NGO/Farmer", "Rukart"],
    // default: 'Trader'
  },
  buyers: [{ type: Schema.Types.ObjectId }],
  sellers: [{ type: Schema.Types.ObjectId }],
  // buyItems: [{ type: Schema.Types.ObjectId }],
  buyItems: {
    scope: { type: String },
    items: [{ type: Schema.Types.ObjectId }],
  },
  items: [itemSchema],
  addedBy: { type: Schema.Types.ObjectId },
  modifiedBy: { type: Schema.Types.ObjectId },
  address: [addressSchema],
  aboutMe: { type: "String", default: "" },
});

const Company = mongoose.model("Companies", companySchema);

module.exports = Company;
