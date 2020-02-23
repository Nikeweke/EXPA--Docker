// connection.js
const mongoose = require("mongoose");


// works 
// const db_adress = "mongodb://root:12345@localhost:27017/admin";
// const db_adress = "mongodb://root:12345@localhost:27017";
const db_adress = "mongodb://admin:12345@localhost:27017/mongo-test";


const options = {
	useUnifiedTopology: true, 
	useNewUrlParser: true,
}

mongoose
.connect(db_adress, options)
.catch((err) => console.log(err))

// getting connection
let db = mongoose.connection

// set listeners to events of DB
db.on('error', (err) => console.log(err))
db.on('connected', 
() => console.log('MongoDB => Connected'))