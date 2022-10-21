import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

//TypeDefs == type definition ==  schema

const TypeDefs = `

type Query {
    getBooks: [Book]
}
    type Mutation {
            createBook(input: BookInput):  Book
            updateBook(input: BookInput, _id : ID) : Book
    }

type Book {
    _id : ID,
    title: String!,
    author: String,
    date: String,
    version: Int
}

input BookInput{
    title: String!,
    author: String,
    date: String,
    version: Int
}

`;
export default makeExecutableSchema({
	typeDefs: TypeDefs,
	resolvers: resolvers,
});
