class QueryHelper{
    constructor(initialfindp,queryObj){
        this.query=initialfindp;//initialfindpromise
        this.queryObj=queryObj;//query
    }

    filter(){
        let myQuery={...this.queryObj};
       let toExcludeFields=["sort","select","limit","page"];
       for(let i=0;i<toExcludeFields.length;i++){
        delete myQuery[toExcludeFields[i]];
        }
        // console.log(myQuery);//If you donot await then u do multiple work b/z give promise 
       this.query= this.query.find(myQuery);
       return this;
    }

    sort(){
        if(this.queryObj.sort){
            let sortString=this.queryObj.sort.split("%").join(" ");//here sort is attribute of this.query object
            this.query=this.query.sort(sortString); //here sort is a function
        }
        return this;
    }

    select(){
        if(this.queryObj.select){
            let selectString=this.queryObj.select.split("%").join(" ");
            this.query=this.query.select(selectString);
        }
        return this;
    }

    paginate(){
        let page=Number(this.queryObj.page)||1;
        let limit=Number(this.queryObj.limit)||4;
        const toSkip=limit*(page-1);
        this.query=this.query.skip(toSkip).limit(limit);
       return this;   
    }
}

module.exports=QueryHelper;








 //old  
// module.exports.checkId = function checkId(req, res, next, id) {
//   // console.log(id);
//   if (id < 0 || id > plans.length) {
//     return res.status(404).json({
//       status: "failed",
//       data: "Wrong Id"
//     });
//   }
//   next();
// };

// module.exports.checkbody = function checkbody(req, res, next) {
//   if (Object.keys(req.body).length == 0) {
//     return res.status(404).json({
//       status: "client error",
//       data: "data not sent"
//     });
//   }
//   next();
// };