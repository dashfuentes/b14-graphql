//const mongoose = require( "mongoose" );
import mongoose from "mongoose";

export async function connect() {
	try {
		await mongoose.connect("mongodb://localhost:27017/mongodbgraphql", {
			useNewUrlParser: true,
		});
		console.log("the database is connected!!");
	} catch (error) {
		//throw error;
		console.log(error);
	}
}

// module.exports = connect()

//**
// Use module.export = variable sin utilizar en el package.json el property "type": "module" / import use require
//export = Babel JS, "type": "module" etc /  import =  import {variable} from './ruta-de-el-file'

//** Mongo Atlas Conexion*/

// const uri =
// 	"mongodb+srv://dashfuentes:Bitcoin123@cluster0.zput9.mongodb.net/?retryWrites=true&w=majority";

// mongoose
// 	.connect(uri, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then((db) => console.log("Db is connected"))
// 	.catch((err) => console.log(err));
