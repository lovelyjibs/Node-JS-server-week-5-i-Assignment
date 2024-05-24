//Include details about installing Node.js, initializing a new project, and installing necessary packages. 
 // Download Node.js Installer. In a web browser, navigate to the Node.js Downloads page. ...
// Install Node.js and NPM. After downloading the installer, follow the steps below: ...
// Verify Installation.

//What is the purpose of using a package like express in setting up a server
//Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application


//Describe the importance of using dotenv in a Node.js project.
//Where secret information /files are stored, e.g, token number, PORT number,  Data base password.

// Provide an example of how to configure dotenv in a Node.js application.
//Install the dotenv package: use npm i dotenv 
//Require the dotenv package as early as possible in your applic


const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server started running on ${PORT}`
    );

})

app.get("/users", (request, response)=>{

    response.json("Hello World")
 
 }
 
    
 )
//Write a basic Node.js endpoint that handles a GET request to fetch an array of courses details (random products)

app.get("/users",(request, response)=>{
    response.json["apple" , "banana","orange"]   

})

app.get("/posts",(request,response)=>{
    response.json("welcome")

})

    
//Create a Node.js endpoint to handle a POST request for adding a new course to an existing array of courses (random product)
 
app.post('/users-list', (request, response) => {
    response.json ({message: 'New user was added to the list',
    });
  });