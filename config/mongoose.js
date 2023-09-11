const mongoose = require('mongoose');
// mongoose.set('strictQuery',true);
// const dotenv = require('.env');
const DB = 'mongodb+srv://riya744rajak:sEAcov8KqU4tZVHA@cluster0.zxtinwz.mongodb.net/?retryWrites=true&w=majority';


//connecting mongoose with database

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
