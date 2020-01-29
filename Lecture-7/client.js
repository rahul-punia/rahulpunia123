const http=require("http");

const options={
        hostname:"127.0.0.1",
        path:"/user",
        port:"3000",
        method:"GET"
    };

    const request=http.request(options,function(res){
        res.on("data",function(data){
            console.log("data event was called");
            console.log(data+" ");
        });
        res.on("end",function(){
            console.log("end event was called");
        });
        //order of data event donot matter write anywhere inside request
        // res.on("data",function(data){
        //     console.log("data event2 was called");
        //     console.log(data+" ");
        // });
    });
    request.end();