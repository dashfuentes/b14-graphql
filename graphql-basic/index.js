const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );

const schema = buildSchema( `
    type Query {
     getWelcome: String 
     getEmployees: String
    }  

`);

const getWelcome = () => {
    return "hello world";
};

const getEmployees = () => {
    return "hello employee";
}

const root = {
    //properties(Schema) = functions
    getWelcome: getWelcome,
    getEmployees: getEmployees
}

app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql: true
} ) );



app.listen( 3000, () => {
    console.log('server running!!')
})