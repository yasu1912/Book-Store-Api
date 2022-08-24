const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.
const Schema = Mongoose.Schema;         //We call mongoose's schema command.

//Here we explain what information we will save in our database.
const Book_Schema = new Schema ({
    Title: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true
    },
    Isbn: {
        type: String,
        require: true
    },
    Language: {
        type: String,
        require: true
    },
    NumberOfPages: {
        type: Number,
        require: true
    },
    Publisher: {
        type: String,
        require: true
    },
    Bookİmage: {
        type: String,
        require:true
    },
    CreatorName:{
        type: String,
        require: true
    }
},{collection:"Book_collection"})   //We explain in which collection it will be saved.

const Book_Add = Mongoose.model("Book_Add",Book_Schema);  //we sync our model to a variable and export it.

module.exports = Book_Add;