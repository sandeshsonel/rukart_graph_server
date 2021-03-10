const { gql } = require("apollo-server-express");

const itemSchema = gql`
  type Item {
    id: ID!
    name: String!
    price: String!
    quantity: Float!
    priceRetail: Float!
    priceBulk: Float!
    minimumBulkQuantity: Float!
    unit: String!
  }
  input AddItem {
    name: String!
    price: String!
    quantity: Int!
    priceRetail: Int!
    priceBulk: Int!
    minimumBulkQuantity: Int!
    unit: String!
  }

  extend type Query {
    getItems: [Item]
  }

  extend type Mutation {
    addItem(body: AddItem): Item!
    deleteItem(itemId: String!): String!
  }
`;

module.exports = itemSchema;

// module.exports = gql`
//   type Post {
//     id: ID!
//     body: String!
//     createdAt: String!
//     username: String!
//     comments: [Comment]!
//     likes: [Like]!
//   }
//   type Item {
//     id: ID!
//     name: String!
//     price: String!
//     quantity: Float!
//     priceRetail: Float!
//     priceBulk: Float!
//     minimumBulkQuantity: Float!
//     unit: String!
//   }
//   input AddItem {
//     name: String!
//     price: String!
//     quantity: Int!
//     priceRetail: Int!
//     priceBulk: Int!
//     minimumBulkQuantity: Int!
//     unit: String!
//   }
//   type Comment {
//     id: ID!
//     createdAt: String!
//     username: String!
//     body: String!
//   }
//   type Like {
//     id: ID!
//     createdAt: String!
//     username: String!
//   }
//   type User {
//     id: ID!
//     email: String!
//     token: String!
//     username: String!
//     createdAt: String!
//   }
//   input RegisterInput {
//     username: String!
//     password: String!
//     confirmPassword: String!
//     email: String!
//   }
//   type Query {
//     getItems: [Item]
//     getPosts: [Post]
//     getPost(postId: ID!): Post
//   }
//   type Mutation {
//     register(registerInput: RegisterInput): User!
//     login(username: String!, password: String!): User!
//     addItem(body: AddItem): Item!
//     deleteItem(itemId: String!): String!
//     createPost(body: String!): Post!
//     deletePost(postId: ID!): String!
//     createComment(postId: String!, body: String!): Post!
//     deleteComment(postId: String!, commnetId: ID!): Post!
//     likePost(postId: ID!): Post!
//   }
// `;
