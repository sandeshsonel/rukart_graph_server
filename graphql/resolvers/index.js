const userResolvers = require("./user");
const messageResolvers = require("./message");
const itemResolver = require("./item");

const resolverArray = [userResolvers, messageResolvers, itemResolver];

module.exports = resolverArray;
