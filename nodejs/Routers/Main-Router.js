const express = require("express");  // Here we set the express.
const Router = express.Router(); // Here we set the router.
const Path = require("path");   // Here we set path module.
const Cookie_Parser = require("cookie-parser"); //Here we set the cookie parser package.
const Registration_Check = require("../controllers/Registration-Controller");   //Here we set up our prebuilt Registration middleware.
const Login_Check = require("../controllers/Login-Controller");     //Here we set up our prebuilt Login middleware.

Router.use(Cookie_Parser());    //Here we set cookie parser middleware with use method.(This middleware will parse the information from the cookie.)

Router.use(express.json());     //Here we set express json middleware with use method.(This middleware will convert the information from the request to json format.)

Router.use(express.urlencoded({ extended: true })); //this middleware will parse the encrypted information from the request.


Router.get("/register",(req,res)=>{     //We are create a arrow function for take request and response to request.

    res.sendFile('Registration-Page.html', { root: Path.join(__dirname, '../public/HTML') }); //We will send registration form.

});

Router.post("/register",Registration_Check);    // İf we get /register command with post method we will use our Registration Middleware.


Router.get("/login",(req,res)=>{        //We are create a arrow function for take request and response to request.

    res.sendFile('Login-Page.html', { root: Path.join(__dirname, '../public/HTML') });//We will send registration form.

});

Router.post("/login",Login_Check);      // İf we get /login command with post method we will use our Login Middleware.

Router.get("/logout",(req,res)=>{   //We made middleware for users to log out.
    try{
        res.clearCookie("auth").redirect("/");  //We clear the user's token from cookies.  
    }
    catch(err){
        res.status(500).send("<h1> Log out Error.</h1>")
    }
});

module.exports= Router; //Here we export our router.