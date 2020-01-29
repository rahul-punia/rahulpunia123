const http=require("http");
const fs=require("fs");
const userdata=require("./user.json");
//request-http://localhost:4000/samantha
const server=http.createServer(function(req,res){
    const Username=req.url.split("/").pop();

    for(var i=0;i<userdata.length;i++){

        if(userdata[i].username=Username){
            res.write(JSON.stringify(userdata[i]));
            res.end();
            return;
        }
    }
    res.end("User doesnot exist");
});
server.listen("4000",function(){
    console.log("server is listen at port 4000")
});










// const html=fs.createReadStream("index.html");
// const server=http.createServer(function(req,res){ //create server
// // console.log(req.url);
// let wholedata="";
// const request=https.get("https:///usersjsonplaceholder.typicode.com/user",function(res){
//     res.on("data",function(data){
//         wholedata=wholedata+data;
//     });
//     res.on("end",function(){
//         const json=JSON.parse(wholedata);
//         fs.writeFileSync("user.json",wholedata);
//         console.log("Data stream is ended");
//         var idx=0;
//     for(var i=0;i<user.json.length;i++){
//     if(req.url==("/"+user.json["username"])){
//         user.json[i].pipe(res);
//     }
//     }
//         });
//     });
// request.end();

// //Routing

// // if(req.url=="/home"){
// //     // res.write("<h1> Home page<h1>") //h1 give in bold
// //     // res.end();
// //     html.pipe(res);//no need to res.end() b\z pipe handle all thing
// // }

// });
// //res.end("is it working");
// //TCP Port-3000--aake machine par server ka address
// server.listen(4000,function(){
//     console.log("server is listening at port 4000");
// });