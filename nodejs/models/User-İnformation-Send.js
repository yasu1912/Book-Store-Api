const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.
const Schema = Mongoose.Schema          //We call mongoose's schema command.

//Here we explain what information we will save in our database.
const User_Schema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
},{collection:"User_collection"})     //We explain in which collection it will be saved.

const User_İnterface = Mongoose.model("User_İnterface",User_Schema); //we sync our model to a variable and export it.

module.exports = User_İnterface;