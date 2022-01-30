import graphql from 'graphql'
const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    data: {
      type: GraphQLString,
      resolve (parentValue, args) {
          return 'Hello, Graphql!'
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})