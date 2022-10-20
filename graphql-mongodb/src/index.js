import express from "express";
import { connect } from './database'
import {graphqlHTTP} from "express-graphql"


const app = express();
connect();

app.use( '/graphl-playground', graphqlHTTP( {
    schema: "",
    graphiql: true
}))


app.listen( '3000', () => {
    console.log( 'running' );
})