const http=require("http");
const fs=require("fs");
const html=fs.createReadStream("index.html");
fs.cr
const server=http.createServer(function(req,res){ //create server
// console.log(req.url);

//Routing
if(req.url=="/home"){
    // res.write("<h1> Home page<h1>") //h1 give in bold
    // res.end();
    const html=fs.createReadStream("index.html");
    html.pipe(res);//no need to res.end() b\z pipe handle all thing
}else if(req.url=="/about"){
    res.write("<h1> about page</h1>")
    res.end();
}else if(req.url=="/contact"){
    res.write("<h1> contact page</h1>")
    res.end();

}else if(req.url=="/help"){
    res.write("<h1> help page</h1>")
    res.end();

}else if(req.url=="/back.jpeg"){
    const img=fs.createReadStream("back.jpeg");
    img.pipe(res);
}else if(req.url=="/style.css"){
    const css=fs.createReadStream("style.css");
    css.pipe(res);
}else{
    res.write("<h1>404 page Not Found</h1>")
    res.end();
}

// res.write("serving data1 from node server");
// res.write("serving  data2 from node server");

// // res.end(); //res.end() call only once but res.write() can call data event more than one b\z data come continouslly
// res.end("is it working1");
// res.end("is it working2");// It donot run b/z once we cal res.end then next end donot come.

});
//res.end("is it working");
//TCP Port-3000--aake machine par server ka address
server.listen(3000,function(){
    console.log("server is listening at port 3000");
});