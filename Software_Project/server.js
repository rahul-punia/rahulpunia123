const express=require("express");
const app=express()
const path=require("path")
const cookieparser=require("cookie-parser");

const userRouter = require("./router/userRouter");
const viewRouter=require("./router/viewRouter");
const complaintRouter=require("./router/complaintRouter")


// ``````````````````````````````````````Middlewares``````````````````````````````````````
//a. express.json() is a method inbuilt in express to recognize the incoming Request Object 
//as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

app.use(express.json());
app.use(cookieparser());
//The middleware will parse the Cookie header on the request and expose the cookie data as 
//the property req.cookies and, if a secret was provided, as the property req.signedCookies. 
//These properties are name value pairs of the cookie name to cookie value.
//When secret is provided, this module will unsign and validate any signed cookie values and 
//move those name value pairs from req.cookies into req.signedCookies. A signed cookie is a cookie that has a value prefixed with s:. Signed cookies that fail signature validation will have the value false instead of the tampered value.
app.use(express.static("public")); //To use public directory files
//use static files using method express.static("public")
//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser.

// express=> rendering/set templating engine
app.set("view engine","pug");  //Imp
// view => directory path (where template store)
app.set("views",path.join(__dirname,"view"));//__dirname give current directory

app.use("/api/users", userRouter);
app.use("/",viewRouter);
app.use("/api/complaint",complaintRouter);

const port=process.env.port || 3000;

app.listen(3000,function(req,res){
    console.log("Server is listening at port 3000");
})