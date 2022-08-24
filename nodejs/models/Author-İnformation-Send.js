const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.
const Schema = Mongoose.Schema;         //We call mongoose's schema command.

//Here we explain what information we will save in our database.
const Author_Schema = new Schema ({  
    NameOfAuthor: {
        type: String,
        require: true
    },
    CountryOfAuthor: {
        type: String,
        require: true
    },
    BirthDateOfAuthor: {
        type: String,
        require: true
    },
    Authorİmage:{
        type: String,
        require: true
    },
    CreatorName:{
        type: String,
        require: true
    }


},{collection:"Author_collection"})     //We explain in which collection it will be saved.

const Author_Add = Mongoose.model("Author_Add",Author_Schema); //we sync our model to a variable and export it.

module.exports = Author_Add;