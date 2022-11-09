const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    genre : String,
    image : String,
    file : String,
    year: Number,
    artist : String,
    createdAt : Date,
});

module.exports = model('music', myschema);