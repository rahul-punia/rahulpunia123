// const plans=require("../model/plans.json");
const planModel=require("../model/planModel");
//Done
module.exports.createPlan =async function createPlan(req, res) {
  // console.log("Actual function ran");
  const recievedPlan = req.body;
  try{
    let createdPlan=await planModel.create(recievedPlan);
    res.status(201).json({
      status:"plan created",
      data:createdPlan
    });
  }catch(err){
    res.status(501).json({
      err,
      status:"Internal server error"
    })
  }
}
  // plan.id = plans.length + 1;
  // plans.push(plan);
  // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  
//   planModel
//   .create(recievedPlan)
//   .then(function(createPlan){
//     console.log(createPlan);
  
//   res.status(201).json({
//     status: "plan created",
//     data: plan
//   });
// }).catch(function(err){
//   console.log(err);
//   res.status(501).json({
//     status:"Server Error"
//   })
// });
// };

// Home work
module.exports.getAllPlans = function getAllplans(req, res) {
  res.status(200).json({
    status: "all plans recieved",
    data: plan
  });
};

// done
module.exports.getPlan = async function getPlan(req, res) {
  try {
    // recieve id through params
    const { id } = req.params;
    const plan = await planModel.findById(id);
    res.json({
      status: "successfull",
      data: plan,
    });
  } catch (err) {
    res.status(404).json({
      status: "Plan Not found",
      err,
    });
  }
};

// module.exports.getPlan = function getPlan(req, res) {
//   const { id } = req.params;
//   res.json({
//     status: "successfull",
//     data: plans[id - 1]
//   });
// };
//updateplan
module.exports.updatePlan = async function updatePlan(req, res) {
  //  identifier => plan
  try {
  const id = req.params.id;
  const originalPlan = await planModel.findById(id);
  //fields to be updated in ur plan
  // local
  const toupdateData = req.body;
  const keys = [];
  for (let key in toupdateData) {
    keys.push(key);
  }
  // express server modify
  for (let i = 0; i < keys.length; i++) {
    originalPlan[keys[i]] = toupdateData[keys[i]];
  }
  // express server=>modified=>mdb
  const updatedPlan=await updatePlan.save();
  // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  // db********************************************************
  // update DB update =>old plan return
  
    // validator => update ,validator
    const updatedPlan = await planModel.findByIdAndUpdate(id,toupdateData, { new: true });
    res.status(200).json({
      status: "update request recieved",
      plan: updatedPlan,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      status: "Plan could not be updated",
      err,
    });
  }
};
// module.exports.updatePlan = function updatePlan(req, res) {
//   const id = req.params.id;
//   const originalPlan = plans[id - 1];
//   const toupdateData = req.body;
//   const keys = [];
//   for (let key in toupdateData) {
//     keys.push(key);
//   }
//   for (let i = 0; i < keys.length; i++) {
//     originalPlan[keys[i]] = toupdateData[keys[i]];
//   }
//   fs.writeFileSync("./data/plans.json", JSON.stringify(plans));

//   res.status(200).json({
//     status: "update request recieved",
//     plan: originalPlan
//   });
// };
//homework
module.exports.deletePlan = function deletePlan(req, res) {
  const { id } = req.params;
  const plan = plans.splice(id - 1, 1);
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(200).json({
    status: "Plan Deleted",
    plan: plan
  });
};