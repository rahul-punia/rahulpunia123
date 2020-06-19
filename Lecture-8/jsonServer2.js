const http=require("http");
const https=require("https");
// const userData=require("./user.json");

const server=http.createServer(function(req,res){
console.log(req.url);
const userName=req.url.split("/").pop();
let wholeData="";
const request=https.get("https:///usersjsonplaceholder.typicode.com/user",function(req,res){
    res.on("data",(chunk)=>{
      wholeData+=chunk;
    })

    req.on("end",function(res){
        const userData=JSON.parse(wholeData);//costly operation so call minimum times
        for(var i=0;i<userData.length;i++){
            if(userData[i].username==userName){
                res.write(JSON.stringify(userData[i]));
                res.end();
                return;
            }
         }
         res.end("user does not exist");
    })
})
request.end();

})

server.listen("3000",()=>{
    console.log("server is listening at port 3000");
})