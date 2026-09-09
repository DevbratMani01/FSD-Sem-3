const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    user(id: ID!): User
  }
`);

// Dummy data
const users = [
  {
    id: "1",
    name: "Aman",
    email: "aman@gmail.com",
  },
  {
    id: "2",
    name: "Rahul",
    email: "rahul@gmail.com",
  },
];

// Resolvers
const root = {
  hello: () => {
    return "Hello GraphQL!";
  },

  user: ({ id }) => {
    return users.find((user) => user.id === id);
  },
};

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/graphql");
});