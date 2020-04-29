const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const MessageType = require("./../types/MessageType");
const MessageResolver = require("./../resolvers/MessageResolver");
const rootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    changeName: {
      type: MessageType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: MessageResolver.changeName,
    },
  },
});

module.exports = rootMutation;
