const https=require("https");
const stream =require("stream");
const fs=require("fs");
const wrsteam=fs.createWriteStream("img3");
var wholeData="";
const request=https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",

function(res){
res.on('data',(data)=>{
    // var json=JSON.parse(data);
    // var imgurl=json["url"];
    // console.log(imgurl);
    // const rdstream=fs.createReadStream(imgurl);
    // rdstream.pipe(wrsteam);
    wholeData+=data;
})

res.on('end',()=>{
    const json=JSON.parse(wholeData);
    const url=json["url"];

    const anotherRequest=https.get(url,function(res){
        res.pipe(wrsteam);
    })
    anotherRequest.end();
    console.log("data Streaming is ended");
})
}
)

request.end();