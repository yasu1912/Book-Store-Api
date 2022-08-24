const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.
const JWT_Decode = require("jwt-decode");   //We are set the JWT decode package here.
const Author_Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority"   // We are set path for our database.
const Author_Pull = require("../models/Author-İnformation-Send");   //We set our Author model.

    

    module.exports=     //We are create a control middlawre here and exporte by module.export funct.

        function (req,res,next){    //We are create a function for take request and response to request.

            try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(Author_Database_url,    
                    { useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            }
            catch{
                res.status(500).send("<h1>There was a problem connecting to the database.</h1>")
            }
            
            let Author_İd = req.params.id.slice(1,)     //We get the id of the author to be deleted on the client side.
            
            let token = req.cookies.auth;           // We are pulled our setted token in browser from cookie.
            
            var decoded_token =  JWT_Decode(token);     //We are decoding token with jwt decoder.
            
            var creator = decoded_token.username      //We will synchronise creator with username in decoded token.
            
            Author_Pull.findOneAndRemove({CreatorName:creator,_id:Author_İd},function(err,result){  //We will check the creator name and author id according to the author information from our database.We checking with two parameter because it's to be more secure.
                
                if(err){    //if we get an error we will throw it to the screen
                    res.status(500).send("<h1>Author Deleting Error.</h1>",err)
                }
                
                else if(result){ //if everything is okay we will redirect our user to authors page.
                    res.status(201).redirect("back")
                }
            
            })
            
}