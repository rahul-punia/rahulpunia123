// const https=require("https");
// var fs=require("fs");

//URL- //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// const options={
//     hostname:"api.nasa.gov",
//     path:"/planetary/apod?api_key=DEMO_KEY",
//     port:"443",
//     methot:"GET"
// };
// //http.get(url)
// const request=https.request(options,function(res){
//     res.on("data",function(data){
//         // console.log(""+data);
//         var json=JSON.parse(data);
//         var user=json["url"];
//        console.log(user);
//      });
//     res.on("end",function(){
//         console.log("Data stream is ended");
        
//     });
// });

// request.end();

const https=require("https");
var fs=require("fs");

// const options={
//         hostname:"api.nasa.gov",
//         path:"/planetary/apod?api_key=DEMO_KEY",
//         port:"443",
//         methot:"GET"
//     };

var  wholedata="";
// const request=https.request(options,
const request=https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",

function(res){
    res.on("data",function(data){
        wholedata=wholedata+data;
    });
    res.on("end",function(){
        const json=JSON.parse(wholedata);
        console.log(json);
        const url=json.url;
        let img="";
        //make another request inside callback function of end event of first request
        // b/z we get URL of img to download after response of first request come
        const anotherRequest=https.get(url,function(res){
            res.on("data",function(imgdata){
                img=img+imgdata;
            });
             
            res.on("end",function(){
                fs.writeFileSync("img.jpg",img);
            });
        });
        anotherRequest.end();
    });
    }
);
request.end();