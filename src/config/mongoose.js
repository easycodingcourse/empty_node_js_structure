const mongo = require('mongoose');
const baseURL = 'mongodb://localhost:27017/quicar';
mongo.connect(process.env.MONGODB_URI || baseURL, { useUnifiedTopology: true, useNewUrlParser: true }).then((db) => {
    console.log('mongoodb Connected');
}).catch((error) => console.log('Not Connected MONGODB :- error',error));