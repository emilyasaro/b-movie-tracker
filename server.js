import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './schema/schema'

const app = express()
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running at port 3000')
})