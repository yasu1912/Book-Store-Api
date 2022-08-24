const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.
const Bcryptjs = require("bcryptjs");   //We are set the pre-installed bcryptjs package for create a crypto password to user.
const JWT = require("jsonwebtoken");    //We are set the Jason Web Token (JWT) here.
const Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority"; // We are set path for our database .
const User_İnfo = require("../models/User-İnformation-Send");   //We set our user model .
const Key_Data = require("../config/.env");  // We are pulled our secret key`s page here.
const Secret_Key = Key_Data.Secret_accsess_key;  // We are set our secret key here.

module.exports=         //We are create a control middlawre here and exporte by module.export funct.
    
    function (req, res, next) {     //We are create a function for take request and response to request.
        
    var data = req.body;        //We synchronize the data with the entered by the user.
    
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //we set the characters we don't want 

    if(!data.username || data.username.length<7 || format.test(data.username)){     //İf someone try enter undefined character we will send error.
        return(res.status(400).send("<h1>Username Error</h1><br><p>(Username empty or include unregular characters.)<p><hr>"));
    }
    else if (data.username && (!data.password || data.password.length<7)){  //İf someone try to entering short or empty we will send error.
        return(res.status(400).send("<h1>Password Error</h1><br><p>(Password empty or include unregular characters.)<p><hr>"));
    }
    else if (data.username && data.password && !data.email){    //İf someone entered empty email we will send error.
        return(res.status(400).send("<h1>Email Error</h1><br><p>(Email empty or include unregular characters.)<p><hr>"));
    }
    else{                              //if all characters are entered properly, we will run this block.
       
        Bcryptjs.hash(data.password,10,function(err,hashedPass)  //We encrypt the password here.
        {
            if(err){        //İf we get an error, we will send an error message.
                res.json("Password hashing crash.",err);
            }
        
            else{              //İf we don`t get error, we will connect our database.
                
                try{    //We will connect our database.if we get error when trying to connect we will send error message.
                    Mongoose.connect(Database_url,    
                        { useNewUrlParser: true,
                        useUnifiedTopology: true,
                    })
                }
                catch{
                    res.status(500).send("<h1>There was a problem connecting to the database.</h1>")
                }
                
                const UserSend = new User_İnfo(     //We write what information we will send to the database.
                    {
                        username: data.username,
                        password: hashedPass,
                        email: data.email
                    }
                );
                
                try{
                    UserSend.save()     //We are trying to save the information with the try command to the database.
                }
                
                catch{
                    ((err)=> {res.status(500).send(err,"Error encountered while creating user");})  //İf we get an error, we will catch this error with catch command and send error message.
                }
                
                let token = JWT.sign({username: data.username},`${Secret_Key}`,{expiresIn:"3h"});   //İf everything is okay, we will create a Token with a lifetime of 3 hours.
                
                res.cookie("auth",token);   //We will put this token in cookies.
                
                return(res.status(201).redirect("/"),next())}   //And we will send the (created) status code then redirect to our homepage. 
        });
        
    }   
    

} 

