module.exports=function(err,req,res,next){
    //operational,logical/unknown
    err.statusCode=err.statusCode||500;
    err.status=err.status||"unknown error";

    if(process.env.NODE_ENV=="production"){
       sendProdError(err,req,res);
    }else{
       sendDevError(err,req,res); 
    }
}

function sendDevError(err,req,res){
    //API response
    if(req.originalUrl.includes("/api")){
        return res.status(err.statusCode).json({
            
        })
    }
}