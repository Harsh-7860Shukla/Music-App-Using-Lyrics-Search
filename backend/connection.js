const mongoose = require('mongoose');

const dbName = "mernaugwss6301";
const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Promise - a special type of object which needs to be resolved
// asynchronous function - return promise

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose; 