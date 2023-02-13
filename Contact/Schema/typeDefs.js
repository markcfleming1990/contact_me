const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    firstName: String
    lastName: String
    email: String
    phone: String
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: String!): User

`;

module.exports = typeDefs;
