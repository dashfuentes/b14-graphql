import express from "express";
import { connect } from './database'
import { graphqlHTTP } from "express-graphql"
import schema from './schema'


const app = express();
connect();

app.use( '/graphl-playground', graphqlHTTP( {
    schema: schema,
    graphiql: true
}))


app.listen( '3000', () => {
    console.log( 'running' );
})