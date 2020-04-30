const { GraphQLObjectType, GraphQLList } = require("graphql");

const taskQueryResolver = require("./../resolvers/TaskQuery");

const TaskType = require("./../types/TaskType");

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: taskQueryResolver.getAllTasks,
    },
  },
});

module.exports = rootQuery;
