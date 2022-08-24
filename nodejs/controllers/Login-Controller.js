const Mongoose = require("mongoose");   // We are set the pre-installed mongoose package for connect and cotrol our database.  
const JWT = require("jsonwebtoken");   //We are set the Jason Web Token (JWT) here.
const Bcryptjs = require("bcryptjs");     //We are set the pre-installed bcryptjs package for create a crypto password to user.
const User_Database_url = "mongodb+srv://yasu:5iZYT4zBSBVqBFcQ@server-1.gl5ppng.mongodb.net/Book-Store?retryWrites=true&w=majority";    // We are set path for our database .
const User_İnfo = require("../models/User-İnformation-Send");       //We set our user model .
const Key_Data = require("../config/.env");  // We are pulled our secret key`s page here.
const Secret_Key = Key_Data.Secret_accsess_key;    // We are set our secret key here.





module.exports=         //We are create a control middlawre here and exporte by module.export funct.
    
    
    function (req, res, next) {         //We are create a function for take request and response to request.
        
            var username = req.body.username;    //We synchronize the username with the username entered by the user.

            try{    //We will connect our database.if we get error when trying to connect we will send error message.
                Mongoose.connect(User_Database_url,    
                    { useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            }
            catch{
                res.status(500).send("<h1>There was a problem connecting to the database</h1>")
            }
        

            if(!req.body.password){     //İf password is empty we will send error.
                res.status(400)
            }
            else{              
                var password = req.body.password;          //İf the password is written with the correct character, we will synchronize it to the password variable. 
            }

        User_İnfo.findOne({username:username})          //We will check the username according to the user information from our database.
        
            .then((user)=>{                                 //We get the result with the .then function and give the user parameter.
                    
                    if(user){                           //We check if the user parameter has a value.
                        
                        Bcryptjs.compare(password, user.password , (err,result)=>{  //İf user parametre has a value of user info, we will use compare function for check password truth. 
                            
                            if(err){        //İf we get error we will send error message with status code. 
                                
                                res.status(406).send("<h1>Password is not correct</h1><hr>");
                                next()
                            
                            }
                            
                            if(result){         //İf we  pass our compare process we will get result parameter and the following codes will start working.
                                
                                let token = JWT.sign({username: username},`${Secret_Key}`,{expiresIn:"3h"});     //We will generate a token here with our secret key.
                                res.cookie("auth",token);        //We will synchronize our generated token with the auth value and put them in cookies.
                                res.status(200).redirect("/");   //We will send (created) status and redirect our user to homepage.
                            
                            }
                        })
                    }
                    else{       //İf user parameter hasn`t value we will send (user not found) error.
                        res.send("<h1>User not found.</h1><hr>");
                    }
            })
    }