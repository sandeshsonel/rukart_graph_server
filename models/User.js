const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  homeAddress: { type: "String", default: "" },
  city: { type: "String", default: "" },
  state: { type: "String", default: "" },
  zip: { type: "Number", default: null },
  location: {
    type: [Number],
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    fullName: { type: "String", required: true },
    email: { type: "String", required: true },
    password: { type: "String", required: true },
    logo: { type: "String" },
    role: { type: "String", required: true },
    dateAdded: { type: "Date", default: Date.now, required: true },
    addedBy: { type: "String" },
    modifiedBy: { type: "String" },
    company: {
      id: { type: Schema.Types.ObjectId, default: null },
      identifier: { type: "String" },
      status: { type: "String" },
      type: { type: "String" },
    },
    phoneMain: { type: "String", default: "" },
    phoneAlt: { type: "String", default: "" },
    emailAlt: { type: "String", default: "" },
    firstName: { type: "String" },
    lastName: { type: "String" },
    address: [addressSchema],
    aboutMe: { type: "String", default: "" },
    facebook: { type: String, default: "" },
    instagram: {
      type: String,
    },
    linkedin: { type: String },
    twitter: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
