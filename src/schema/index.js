const { GraphQLSchema } = require("graphql");

const rootQuery = require("./queries/index");
const rootMutation = require("./mutations/index");

const Schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = Schema;
