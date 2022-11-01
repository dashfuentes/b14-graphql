import mongoose from "mongoose";

const uri =
	"mongodb+srv://dashfuentes:Bitcoin123@cluster0.zput9.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("Db is connected!!"))
	.catch((err) => console.log(err));
