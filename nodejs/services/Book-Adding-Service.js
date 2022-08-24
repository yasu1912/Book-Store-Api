const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database. 
const JWT_Decode = require("jwt-decode");   //We are set the JWT decode package here.
const Book_Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority" // We are set path for our database.
const Book_İnfo = require("../models/Book-İnformation-Send");   //We set our Author model.


module.exports =        //We are create a control middlawre here and exporte by module.export funct.

        function(req, res, next){       //We are create a function for take request and response to request.
        
        var data = req.body;    //We synchronize the data with the entered by the user.
        
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;  //we set the characters we don't want

        if(!data.Title || format.test(data.Title)){ //We don't want undefined character if someone enter them or leave empty  we will send error.
            return(res.status(400).send("<h1>Book Title is required for save.</h1><p>Book Title can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && (!data.Author || format.test(data.Author))){ //We don't want undefined character if someone enter them or leave empty  we will send error.
            return(res.status(400).send("<h1>Author name is required for save.</h1><p>Author name can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && data.Author && (!data.Price || format.test(data.Price))){    //We don't want undefined character if someone enter them or leave empty  we will send error.
            return(res.status(400).send("<h1>Price is required for save.</h1><p>Price can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && data.Author && data.Price && !data.Isbn){    //İf someone leave empty  we will send error.
            return(res.status(400).send("<h1>ISBN is required for save.</h1><p>ISBN can't be empty.</p>"))  
        }
        else if (data.Title && data.Author && data.Price && data.Isbn && (!data.Language || format.test(data.Language))){   //We don't want undefined character if someone enter them or leave empty  we will send error.
            return(res.status(400).send("<h1>Language is required for save.</h1><p>Language can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && data.Author && data.Price && data.Isbn && data.Language && (!data.NumberOfPages || format.test(data.NumberOfPages))){    //We don't want undefined character if someone enter them or leave empty  we will send error.
            return(res.status(400).send("<h1>Number of pages is required for save.</h1><p>Number of pages can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && data.Author && data.Price && data.Isbn && data.Language && data.NumberOfPages && (!data.Publisher || format.test(data.Publisher))){
            return(res.status(400).send("<h1>Publisher is required for save.</h1><p>Publisher can`t include strong character (@!^#+&'£$) or can't be empty.</p>"))
        }
        else if (data.Title && data.Author && data.Price && data.Isbn && data.Language && data.NumberOfPages && data.Publisher && !data.Bookİmage){ //İf someone leave empty  we will send error.
            return(res.status(400).send("<h1>Book İmage is required for save.</h1><p>Book İmage can't be empty.</p>"))
        }
    
        else{   //İf all characters are entered properly, we will run this block.
            
            try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(Book_Database_url,
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
                const Book_İnfo_Send = new Book_İnfo(
                    {
                        Title:data.Title,
                        Author:data.Author,
                        Price:data.Price,
                        Isbn:data.Isbn,
                        Language:data.Language,
                        NumberOfPages:data.NumberOfPages,
                        Publisher:data.Publisher,
                        Bookİmage:data.Bookİmage,
                        CreatorName:creator
                    }
                    )

                    Book_İnfo_Send.save()   //We are trying to save the information with the try command to the database.
                    res.status(201).redirect("/books")
                }
            catch{      //İf we catch an error we will send error code with message.
                    res.status(500).send("<h1>Error encountered while creating Book</h1>")
                    next()
                }

        }
    }   