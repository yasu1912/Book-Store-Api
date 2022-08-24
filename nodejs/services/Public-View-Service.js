const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database. 
const Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority" // We are set path for our database.
const Book_Pull = require("../models/Book-İnformation-Send");   //We set our Book model.
const Author_Pull = require("../models/Author-İnformation-Send");   //We set our Author model.
    
    
    
    module.exports = 
        
        async function(req,res,next){
            
            try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(Database_url,    
                    { useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            }
            catch{
                res.status(500).send("<h1>There was a problem connecting to the database.</h1>")
            }
            try {
                let Books = await Book_Pull.find({});  //We pull all the books in our database.
                let Authors = await Author_Pull.find({});    //We pull all the authors in our database.
                let Token = req.cookies.auth    //We get our token from cookies.

                    if(Token){      //İf we have a token we will send User:true else User:false.Sending this information will allow the author and books sections to be displayed instead of the registration and login buttons.
                        res.render("Main-Page",{Books:Books,Authors:Authors,User:true})
                    }
                    else{
                        res.render("Main-Page",{Books:Books,Authors:Authors,User:false})
                    }
              } 
              catch (error) {   //if we have a problem with the database we will print it to the screen.
                res.status(500).send("<h1>There was a problem retrieving information from the database.</h1>")
              }
            
            
        }
       