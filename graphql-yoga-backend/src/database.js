import mongoose from "mongoose";

const uri =
	"mongodb+srv://dashfuentes:Test123@cluster0.6ckqtkq.mongodb.net/?retryWrites=true&w=majority";
	

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));
