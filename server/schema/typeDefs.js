const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phone: String

  }


  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phone: String!)
  `;

module.exports = typeDefs;
