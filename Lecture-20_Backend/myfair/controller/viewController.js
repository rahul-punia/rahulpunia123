const planModel=require("../model/planModel");
const userModel=require("../model/userModel");

function getTrialPage(req,res){
    let name=req.userName;
    res.render("trial.pug",{
        titleofThePage: "Trial Page",name
    })
}

async function getHomePage(req,res){
    let plans=await planModel.find().limit(3);
    // let plans=(await planModel.find()).slice(0,3);
    let name=req.userName;
    res.render("home.pug",{
        title:"Home Page",plans,name
    })
}

async function getPlansPage(req,res){
    // planmodel=>getplan
    let plans=await planModel.find();//give whole plane object b/z empty find
    let name=req.userName;
    res.render("plansPage.pug",{
        title:"Plans Page",plans,name
    })
}
async function getLoginPage(req,res){
    let name=req.userName;
    res.render("login.pug",
        {title:"login"},name
    )}
async function getProfilePage(req,res){
  const user=await userModel.findById(req.id);
  const name=req.userName;
  res.render("profile.pug",
  {title:"Profile Page",user,name}
  )
}
async function logout(req,res){
    let token="sdhjfkfdjhsfhs";//set Inavalid token
    res.cookie("jwt",token,{httpOnly:true});
    res.status(200).json({
        status:"User loggedout"
    })
}
async function managePlans(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
     res.render("managePlan.pug",{
        title:"ManagePlans",user,name
    })
}

async function createPlan(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
     res.render("addPlan.pug",{
        title:"Add Plan",user,name
    })
}

async function deletePlan(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
     res.render("deletePlan.pug",{
        title:"Delete Plan",user,name
    })
}

async function updatePlan(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
     res.render("updatePlan.pug",{
        title:"Delete Plan",user,name
    })
}

async function forgetPassword(req,res){
    const user=await userModel.findById(req.id);
    const name=req.userName;
     res.render("forgetPassword.pug",{
        title:"Delete Plan",user,name
    })
}
async function resetPassword(req,res){
    res.render("resetPassword.pug",{
        title:"resetPassword"
    })
}
async function signupPage(req,res){
     res.render("signupPage.pug",{
         title:"signup"
     })
}


module.exports.getTrialPage=getTrialPage;
module.exports.getHomePage=getHomePage;
module.exports.getPlansPage=getPlansPage;
module.exports.getLoginPage=getLoginPage;
module.exports.getProfilePage=getProfilePage;
module.exports.logout=logout;
module.exports.managePlans=managePlans;
module.exports.createPlan=createPlan;
module.exports.deletePlan=deletePlan;
module.exports.updatePlan=updatePlan;
module.exports.forgetPassword=forgetPassword;
module.exports.resetPassword=resetPassword;
module.exports.signupPage=signupPage;