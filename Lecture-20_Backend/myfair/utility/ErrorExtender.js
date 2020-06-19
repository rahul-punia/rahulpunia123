class ErrorExtender extends Error {

    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        statusCode=""+statusCode;//convert in to string
        this.status=`${statusCode.startsWith('4')? "client error":"server error"}`;
    }

}
module.exports=ErrorExtender;
