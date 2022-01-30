import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './db/schema.js'

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('Server is running at port 3000\nhttp://localhost:3000/graphql')
})