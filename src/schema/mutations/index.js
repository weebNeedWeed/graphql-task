const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const TaskType = require("./../types/TaskType");
const TaskResolver = require("./../resolvers/Task");
const rootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    addTask: {
      type: TaskType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        status: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: TaskResolver.addTask,
    },
  },
});

module.exports = rootMutation;
