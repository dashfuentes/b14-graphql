import Book from "./models/Book";

export const resolvers = {
	Query: {
		async getBooks() {
			const books = await Book.find();
			return books;
		},
	},
	Mutation: {
		async createBook(_, { input }) {
			const newBook = new Book(input);
			await newBook.save();
			return newBook;
		},
	},
};
