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
    deleteTask: {
      type: TaskType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: TaskResolver.deleteTask,
    },
    updateTask: {
      type: TaskType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        status: { type: new GraphQLNonNull(GraphQLInt) },
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: TaskResolver.updateTask,
    },
  },
});

module.exports = rootMutation;
