const https=require("https");
var fs=require("fs");

var imgstream=fs.createWriteStream("img.png");
var  wholedata="";
// const request=https.request(options,
const request=https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",

function(res){
    res.on("data",function(data){
        wholedata=wholedata+data;
    });
    res.on("end",function(){
        const json=JSON.parse(wholedata);
        // console.log(json);
        const url=json.url;
        // let img="";
        //make another request inside callback function of end event of first request
        // b/z we get URL of img to download after response of first request come
        const anotherRequest=https.get(url,function(res){
            res.pipe(imgstream);//res(respone) is a readableStream jise hum writeablestream(imgstream) mai dal rhe hai 
            });
        anotherRequest.end();
    });
    }
);
request.end();