import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './api/schema.js';
import syncAndSeed from './db/syncAndSeed.js';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const init = async () => {
  try {
    syncAndSeed();
    app.listen(3000, () => {
      console.log('Server is running at port 3000\nhttp://localhost:3000/graphql');
    })
  } catch (err) {
    console.log(err);
  }
};

init();