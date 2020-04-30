const { GraphQLObjectType, GraphQLList } = require("graphql");

const taskResolver = require("./../resolvers/Task");

const TaskType = require("./../types/TaskType");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: taskResolver.getAllTasks,
    },
  },
});

module.exports = rootQuery;
