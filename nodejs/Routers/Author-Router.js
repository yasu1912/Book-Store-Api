const express = require("express");  // Here we set the express.
const Router = express.Router(); // Here we set the router.
const Author_Add = require("../services/Author-Adding-Service");     //Here we set up our prebuilt Add Author middleware.
const Author_Delete = require("../services/Authors-Delete-Service");   //Here we set up our prebuilt Delete Author middleware.



Router.get("/add",(req,res)=>{   //We are create a arrow function for take request and response to request.
   res.render("Create-Authors-Page");   //İf we get the /add command we will send our create page.
});
Router.post("/add",Author_Add);   //İf we get the /add command with post method, we will use add author middleware.

Router.get("/delete/:id",Author_Delete); //İf we get the /delete command with get method, we will use delete author middleware.


module.exports= Router; //Here we export our router.