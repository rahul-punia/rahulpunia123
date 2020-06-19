const QueryHelper = require("../utility/utilityfn");
// 1.
module.exports.createElement = function (ElementModel) {
  return async function create(req, res) {
    const recievedElement = req.body;
    try {
      let createdElement = await ElementModel.create(recievedElement);
      // send success response to client
      res.status(201).json({
        status: " success",
        data: createdElement,
      });
    } catch (err) {
      res.status(501).json({
        err,
        status: "Internal server error",
      });
    }
  };
}
// homework
module.exports.getAllElement = function (ElementModel) {
  return async function getAll(req, res) {
    try {
      // 
      let willGetAllElementsPromise = new QueryHelper(ElementModel.find(), req.query);
      // pageElements = filteredElements.slice(toSkip, toSkip + limit);
      let filteredElements = willGetAllElementsPromise.filter().sort().select().paginate();
      let finalans = await filteredElements.query;
      res.status(200).json({
        status: "all Elements recieved",
        data: finalans,
      });
    } catch (err) {
        res.status(404).json({
            err:err.message,
            status:"Request Failed"
          });
    }
  };
}
module.exports.getElement = function (ElementModel) {
  return async function get(req, res) {
    try {
      // recieve id through params
      const { id } = req.params;
      const Element = await ElementModel.findById(id);
      res.json({
        status: "successfull",
        data: Element,
      });
    } catch (err) {
      res.status(404).json({
        status: "Element Not found",
        err,
      });
    }
  };

}
module.exports.updateElement = function (ElementModel) {
  return async function update(req, res) {
    //  identifier => Element
    // const originalElement = Elements[id - 1];
    //fields to be updated in ur Element
    // local
    try {
      const id = req.params.id;
      const toupdateData = req.body;
      // mdb=> express server
      const originalElement = await ElementModel.findById(id);
      const keys = [];
      for (let key in toupdateData) {
        keys.push(key);
      }
      // express server => modify
      for (let i = 0; i < keys.length; i++) {
        originalElement[keys[i]] = toupdateData[keys[i]];
      }
      // express server=> modified=> mdb
      const updatedElement = await originalElement.save();
      // fs.writeFileSync("./data/Elements.json", JSON.stringify(Elements));
      // db********************************************************
      // update DB update =>old Element return
      res.status(200).json({
        status: "update request recieved",
        Element: updatedElement,
      });
    } catch (err) {
      console.log(err);
      res.status(501).json({
        status: "Element could not be updated",
        err,
      });
    }
  };
}
module.exports.deleteElement = function (ElementModel) {
  return async function (req, res) {
    try {
      const id = req.params.id;

      const Element = await ElementModel.finByIdAndDelete(id);
      res.status(200).json({
        status: "Element Deleted",
        Element: Element,
      });
    } catch (err) {
      res.status(404).json({
        status: "Element could not be Deleted",
        err: err.message,
      });
    }
}
}







// const QueryHelper=require("../utility/utilityfn");
// const fs=require("fs");
// //Done
// module.exports.createPlan =async function createPlan(req, res) {
//   // console.log("Actual function ran");
//   const recievedPlan = req.body;
//   try{
//     let createdPlan=await planModel.create(recievedPlan);
//     res.status(201).json({
//       status:"plan created",
//       data:createdPlan
//     });
//   }catch(err){
//     res.status(501).json({
//       err,
//       status:"Internal server error"
//     })
//   }
// }

//   // plan.id = plans.length + 1;
//   // plans.push(plan);
//   // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  
// //   planModel
// //   .create(recievedPlan)
// //   .then(function(createPlan){
// //     console.log(createPlan);
  
// //   res.status(201).json({
// //     status: "plan created",
// //     data: plan
// //   });
// // }).catch(function(err){
// //   console.log(err);
// //   res.status(501).json({
// //     status:"Server Error"
// //   })
// // });
// // };



// // Home work
// module.exports.getAllPlans = async function getAllplans(req, res) {
//   try{
//     // //console.log(req.query);
//     // //sort,select,limit,page
//     // // let myQuery=req.query;//copy address
//     // //1.for loop
//     // //2.short hand method
//     // let myQuery={...req.query};//copy object
//     // console.log(myQuery);
//     // console.log("--------------------------------------");
//     // let toExcludeFields=["sort","select","limit","page"];
//     // for(let i=0;i<toExcludeFields.length;i++){
//     //   delete myQuery[toExcludeFields[i]];
//     // }
//     // console.log(myQuery);//If you donot await then u do multiple work b/z give promise 
//     // let AllPlansPromise = planModel.find(myQuery);
    
//     // if(req.query.sort){
//     //   let sortString=req.query.sort.split("%").join(" ");
//     //   AllPlansPromise=AllPlansPromise.sort(sortString);
//     // }

//     // if(req.query.select){
//     //   let selectString=req.query.select.split("%").join(" ");
//     //   AllPlansPromise=AllPlansPromise.select(selectString);
//     // }
    
//     // //pagination
//     // //limit skip
//     // //pagenumber
//     // let page=Number(req.query.page)||1;
//     // let limit=Number(req.query.limit)||4;
//     // const toSkip=limit*(page-1);
//     // AllPlansPromise=AllPlansPromise.skip(toSkip).limit(limit);
//     // const filteredPlans=await AllPlansPromise;
//     //pagePlans=filteredPlans.slice(toSkip,toSkip+limit);
//     willGetAllPlansPromise=new QueryHelper(planModel,req.query);
//     const filteredPlans=  willGetAllPlansPromise.filter().sort().select().paginate();
//     let finalans=await filteredPlans.query;
//     res.status(200).json({
//       status: "all plans recieved",
//       data: finalans
//     });
//   }catch(err){
//     res.status(404).json({
//       status:err.message
//     });
//   }
// };

// // done
// module.exports.getPlan = async function getPlan(req, res) {
//   try {
//     // recieve id through params
//     const { id } = req.params;
//     const plan = await planModel.findById(id);
//     res.json({
//       status: "successfull",
//       data: plan,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "Plan Not found",
//       err,
//     });
//   }
// };


// //updateplan
// module.exports.updatePlan = async function updatePlan(req, res) {
//   //  identifier => plan
//   try {
//   const id = req.params.id;
//   const originalPlan = await planModel.findById(id);
//   //fields to be updated in ur plan
//   // local
//   const toupdateData = req.body;
//   const keys = [];
//   for (let key in toupdateData) {
//     keys.push(key);
//   }
//   // express server modify
//   for (let i = 0; i < keys.length; i++) {
//     originalPlan[keys[i]] = toupdateData[keys[i]];
//   }
//   // express server=>modified=>mdb
//   const updatedPlan=await originalPlan.save();

//   // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
//   // db********************************************************
//   // update DB update =>old plan return
//     // validator => update ,validator
//     // const updatedPlan = await planModel.findByIdAndUpdate(id,toupdateData, { new: true });
//     res.status(200).json({
//       status: "update request recieved",
//       plan: updatedPlan,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(501).json({
//       status: "Plan could not be updated",
//       err,
//     });
//   }
// };

// //homework
// module.exports.deletePlan =async function deletePlan(req, res) {
//   const { id } = req.params;
//   // const plans = await planModel.find();
//   // const plan = plans.splice(id - 1, 1);
//   const plan=await planModel.findById({"_id":id});
//   console.log(plan);
//   // fs.writeFileSync("../model/planModel", JSON.stringify(plans));
//   // planModel.collection.deleteOne(plan)
//   // .then(function(result) {
//   //   console.log("plan deleted from db")
//   // })
//   // await plan.save();
//    await plan.remove();//planModel.deleteOne(plan);
//   res.status(200).json({
//     status: "Plan Deleted",
//     plan: plan
//   });
// };
// 