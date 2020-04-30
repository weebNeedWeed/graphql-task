const { GraphQLSchema } = require("graphql");

const rootQuery = require("./queries/index");

const Schema = new GraphQLSchema({
  query: rootQuery,
});

module.exports = Schema;
