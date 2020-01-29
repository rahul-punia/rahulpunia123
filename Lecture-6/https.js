const https=require("https");
var fs=require("fs");
//https://jsonplaceholder.typicode.com/users
const options={
    hostname:"jsonplaceholder.typicode.com",//site name-uniqu
    path:"/users",                  // where we go inside server
    port:"443",             //to identify a server from multiple server using TCP port 
    method:"GET"
};
let wholedata="";
const request=https.request(options,function(res){
    // let count=0;
    res.on("data",function(data){
        wholedata=wholedata+data;
        // let chunk=JSON.parse(data);
        // console.log(""+data);
        // count++;
    });
    //data come in packets/chunks form so when all data come OS  call endevent
    res.on("end",function(){
        // console.log(JSON.parse(wholedata));
        const json=JSON.parse(wholedata);
        fs.writeFileSync("user.json",json); //save [object object]
        // fs.writeFileSync("user.json",wholedata); //save information in require format
        
        //difference b\w string and json is we can use json as array operations
        //  const user=json[0];
        //  console.log(user);
        console.log("Data stream is ended");
        // console.log(count);
    });
});

request.end(); //complete request send from client to server using end