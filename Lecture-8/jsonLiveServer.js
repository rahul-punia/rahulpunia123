const https=require("https");
const http=require("http");
// const userdata=require("./user.json");

const server=http.createServer(function(req,res){
    const UserName=req.url.split("/").pop();
    var wholedata="";
    const request=https.get("https://jsonplaceholder.typicode.com/users",function(resq){
    resq.on("data",function(chunk){
        wholedata=wholedata+chunk;
    });
    resq.on("end",function(){
        const userdata=JSON.parse(wholedata);
        for(var i=0;i<userdata.length;i++){
            if(userdata[i].username==UserName){
                res.write(JSON.stringify(userdata[i]));
                res.end();
                return;
            }
        }
        res.end("User doesnot exist");
    });
    });
    request.end();
});
server.listen("5000",function(){
    console.log("server is listen at port 5000")
});
