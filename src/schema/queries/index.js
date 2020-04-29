const { GraphQLObjectType, GraphQLString } = require("graphql");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "heelo",
    },
  },
});

module.exports = rootQuery;
