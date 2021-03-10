const { gql } = require("apollo-server-express");
const messageSchema = require("./message");
const userSchema = require("./user");
const itemSchema = require("./items");

const baseSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

const schemaArray = [baseSchema, messageSchema, userSchema, itemSchema];

module.exports = schemaArray;
