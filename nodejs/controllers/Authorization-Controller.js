const JWT = require("jsonwebtoken");        // We are set the Jason Web Token (JWT) here.
const Key_Data = require("../config/.env");  // We are pulled our secret key`s page here.
const Secret_Key = Key_Data.Secret_accsess_key; // We are set our secret key here.


module.exports =    //We are create a control middlawre here and exported by module.export funct. 

  function(req, res, next){  //We are create a function for take request and response to request.

    let token = req.cookies.auth; // We are pulled our setted token in browser from cookie. 
      
      // İf we have a token , it`s mean to we are a member this site but if we don`t have, we must create new account.
      if (token){  
          
        JWT.verify(token, Secret_Key, function(err, token_data) { // We create this row for check the token thruth.
              
          if (err){         // İf we catch an error, we will send an error message to the page.
                return res.status(401).send('<h1>Unknown Token Error.</h1><hr>');
            } 
          else{             // In another case we will sync our tokens to user data and move on to the next state.
                req.user_data = token_data;
                next();
              }
          });      
      }
      // İf we haven`t a token we will send Error message.   
      else{
            return res.status(401).send('<h1>Unathorize user.</h1><hr>');
          }
    }