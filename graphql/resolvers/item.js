const Item = require("../../models/Item");

const itemResolver = {
  Query: {
    getItems: async function () {
      try {
        const items = await Item.find();
        return items;
      } catch (err) {}
    },
  },
  Mutation: {
    addItem: async function (_, { body: { name, price, quantity, priceRetail, priceBulk, minimumBulkQuantity, unit } }) {
      try {
        const addItem = await Item.create({
          name,
          price,
          quantity,
          price,
          priceRetail,
          priceBulk,
          minimumBulkQuantity,
          unit,
        });

        const items = await addItem.save();
        console.log("items", items);
        return items;
      } catch (error) {}
    },
    deleteItem: async function (_, { postId }) {
      try {
        await Item.deleteOne({ _id: postId });
        return "Delete Item Successfully";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = itemResolver;
