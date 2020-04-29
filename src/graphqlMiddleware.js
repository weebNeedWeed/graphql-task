const grapqlHTTP = require("express-graphql");

const Schema = require("./schema/index");

console.log(process.env.NODE_ENV);

const grapqlMiddleware = grapqlHTTP({
  schema: Schema,
  graphiql: process.env.NODE_ENV === "development",
});

module.exports = grapqlMiddleware;
