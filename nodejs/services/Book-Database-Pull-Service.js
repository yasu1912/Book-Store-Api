const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database. 
const JWT_Decode = require("jwt-decode");   //We are set the JWT decode package here.
const Book_Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority" // We are set path for our database.
const Book_Pull = require("../models/Book-İnformation-Send");   //We set our Author model.




    module.exports =        //We are create a control middlawre here and exporte by module.export funct.

        function(req, res, next){       //We are create a function for take request and response to request.
            
            try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(Book_Database_url,    
                    { useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            }
            catch{
                res.status(500).send("<h1>There was a problem connecting to the database.</h1>")
            }
            
            
            let token = req.cookies.auth;   // We are pulled our setted token in browser from cookie.
            
            var decoded_token =  JWT_Decode(token); //We are decoding token with jwt decoder.
            
            let creator = decoded_token.username    //We will synchronise creator with username in decoded token.
            
            Book_Pull.find({CreatorName:creator},function(err,result){  //We will check the creator name according to the book information from our database.
                
                if(result.length == 0){ //if no book are found we will send a message.
                    res.render("Books-View-Page",{Send:"You haven't created any Books",Creator:creator,Books:""})
                    next()
                }
                else if (err){  //if we get an error we will throw it to the screen.
                    throw err
                }
                else{       //if user have a book we will send them screen. 
                    res.render("Books-View-Page",{Creator:creator,Books:result,Send:""})
                    next()
                }
                
            })
        }
       