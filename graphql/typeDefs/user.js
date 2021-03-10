const { gql } = require("apollo-server-express");

const user = gql`
  type Token {
    token: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    role: String!
    message: [Message!]
  }
  extend type Query {
    users: [User!]
    user(id: ID!): User!
    me: User
  }
  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): User!
    login(username: String!, password: String!): Token!
    updateUser(username: String!): User!
    deleteUser(id: ID!): Boolean!
    me: User
  }
  extend type Subscription {
    users: [User!]
    user(id: ID!): User!
    me: User
  }
`;

module.exports = user;
