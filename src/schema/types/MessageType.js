const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = MessageType;
