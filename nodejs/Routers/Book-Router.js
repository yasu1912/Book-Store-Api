const express = require("express");  // Here we set the express.
const Router = express.Router(); // Here we set the router.
const Book_Add = require("../services/Book-Adding-Service");     //Here we set up our prebuilt Add Book middleware.
const Book_Delete = require("../services/Books-Delete-Service");   //Here we set up our prebuilt Delete Book middleware.




Router.get("/add",(req,res)=>{  //We are create a arrow function for take request and response to request.
    res.render("Create-Books-Page"); //İf we get the /add command we will send our create page.
});
Router.post("/add",Book_Add);    //İf we get the /add command with post method, we will use add Book middleware.

Router.get("/delete/:id",Book_Delete);  //İf we get the /delete command with get method, we will use delete Book middleware.

module.exports= Router;  //Here we export our router.