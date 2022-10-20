import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from "./resolvers";

//TypeDefs == type definition ==  schema

const TypeDefs = `

type Query {
    getBooks: [Book]
}

type Book {
    _id : ID,
    title: String!,
    author: String,
    date: String,
    version: String
}

`
export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
} );
