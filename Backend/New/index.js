const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

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

const users = [];

// Resolvers
const root = {
  hello: () => "Hello, GraphQL!",
  user: ({ id }) => users.find((user) => user.id === id),
};

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.post("/hello", (req, res) => {
  const { id, name, email } = req.body;

  users.push({ id, name, email });

  res.render("index", {
    message: "User created!",
    user: { id, name, email },
  });
});

app.get("/", (req, res) => {
  res.render("index", { message: null, user: null });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
