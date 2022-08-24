const Mongoose = require("mongoose"); // We are set the pre-installed mongoose package for connect and cotrol our database.      
const JWT_Decode = require("jwt-decode");   //We are set the JWT decode package here.
const Author_Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority"    // We are set path for our database.
const Author_İnfo = require("../models/Author-İnformation-Send");   //We set our Author model.



    module.exports =    //We are create a control middlawre here and exporte by module.export funct.
    
        function(req, res, next){   //We are create a function for take request and response to request.
        
            var data = req.body;    //We synchronize the data with the entered by the user.
        
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;  //we set the characters we don't want
        
            if(!data.NameOfAuthor || format.test(data.NameOfAuthor)){   //We don't want undefined character if someone enter them or leave empty  we will send error.
                return(res.status(400).send("<h1>Author name is required for save.</h1><p>Author name can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
            }
            
            else if (data.NameOfAuthor && (!data.CountryOfAuthor || format.test(data.CountryOfAuthor))){    //We don't want undefined character if someone enter them or leave empty  we will send error.
                return(res.status(400).send("<h1>Author Country is required for save.</h1><p>Author Country can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
            }
            
            else if (data.NameOfAuthor && data.CountryOfAuthor && (!data.BirthDateOfAuthor)){    //İf someone leave empty  we will send error.
                return(res.status(400).send("<h1>Author Birth Date is required for save.</h1><p>Author Birth Date can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
            }
            
            else if (data.NameOfAuthor && data.CountryOfAuthor && data.BirthDateOfAuthor && !data.Authorİmage){ //İf someone leave empty  we will send error.
                return(res.status(400).send("<h1>Author İmage is required for save.</h1><p>Author İmage can't be empty.</p>"))
            }
            
            else{   //İf all characters are entered properly, we will run this block. 
        
                try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(Author_Database_url,
                    { useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                }
                catch{res.status(500).send("<h1>There was a problem connecting to the database.</h1>")}
                
                let token = req.cookies.auth;   //We are pulled our setted token in browser from cookie.
                
                var decoded_token =  JWT_Decode(token); //We are decoding token with jwt decoder.
                
                var creator = decoded_token.username    //We will synchronise creator with username in decoded token. 
                
                //Here we create a new schema for which info send our database.
                try{
                    const Author_İnfo_Send = new Author_İnfo(  
                        {
                            NameOfAuthor:data.NameOfAuthor,
                            CountryOfAuthor:data.CountryOfAuthor,
                            BirthDateOfAuthor:data.BirthDateOfAuthor,
                            Authorİmage:data.Authorİmage,
                            CreatorName:creator
                        }
                    )
                    
                    Author_İnfo_Send.save() //We are trying to save the information with the try command to the database.
                    res.status(201).redirect("/authors")
                }
                catch{      //İf we catch an error we will send error code with message.
                    res.status(500).send("<h1>Error encountered while creating Author</h1>")
                    next()
                }
                
        }}