const https=require("https");
var fs=require("fs");
//https:///users
const options={
    hostname:"jsonplaceholder.typicode.com",
    path:"/users",
    port:"443",
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
    res.on("end",function(){
        // console.log(JSON.parse(wholedata));
        const json=JSON.parse(wholedata);
        // fs.writeFileSync("user.json",json); //save [object object]
        // createuser(json);
        fs.writeFileSync("user.json",wholedata);
         //difference b\w string and json
        //  const user=json[0];
        //  console.log(user);
        console.log("Data stream is ended");
        // console.log(count);
    });
});
request.end();





//  function createuser(json){
//      for(var i=0;i<json.length;i++){
//         //  var json=require("./user.json");
//         //  let userdata="";
//         //  for(let key in json[i]){
//         //      userdata=userdata+key+":"+json[i][key];
//         //  }
//         // fs.writeFileSync(json[i]["username"]+".json",userdata);
//          fs.writeFileSync(json[i]["username"]+".json",JSON.stringify(json[i]));
//      }
//  }
