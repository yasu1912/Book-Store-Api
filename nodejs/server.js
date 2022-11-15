const express = require("express");  // We set the express here.
const App = express();      // We set the express as a function.
const PORT = 8080;      // We set the Port here.
const Path = require("path");   // Here we set path module.
const Cookie_Parser = require("cookie-parser"); //Here we set the cookie parser package.
const Authorizon_Check = require("./controllers/Authorization-Controller") //Here we set authorizon check middleware.
const Author_Router = require("./Routers/Author-Router"); //Here we set author router.
const Author_Database = require("./services/Author-Database-Pull-Service")  //Here we set author database check middleware.
const Book_Router = require("./Routers/Book-Router");   //Here we set book router.
const Book_Database = require("./services/Book-Database-Pull-Service")  //Here we set Book database check middleware.
const Main_Router = require("./Routers/Main-Router.js");  //Here we set main router.
const Public_View = require("./services/Public-View-Service")//Here we set our public view middleware.

App.use(express.static(Path.join(__dirname, './public')));

App.set('view engine', 'ejs'); //here we set up the view engine

App.set('views', Path.join(__dirname, './views'))   //here we set up the path of view engine

App.use(Cookie_Parser())    //Here we set cookie parser middleware with use method.(This middleware will parse the information from the cookie.)

App.use(express.json());    //Here we set express json middleware with use method.(This middleware will convert the information from the request to json format.)

App.use(express.urlencoded({ extended: true }));    //this middleware will parse the encrypted information from the request.

App.get("/",Public_View); //We set the application for pull public data.

App.use("/",Main_Router); // If there is a request to the homepage, we redirect it to the main router.

App.use("/authors",Authorizon_Check,Author_Router,Author_Database)  //If there is a request to the authors page,first we will check authorize then foward to router and database.
App.use("/books",Authorizon_Check,Book_Router,Book_Database)    //If there is a request to the books page,first we will check authorize then foward to router and database.

App.listen(PORT) //we set the server port.