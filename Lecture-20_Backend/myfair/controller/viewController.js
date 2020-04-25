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
    res.render("managePlan.pug",{
        title:"ManagePlans"
    })
}


module.exports.getTrialPage=getTrialPage;
module.exports.getHomePage=getHomePage;
module.exports.getPlansPage=getPlansPage;
module.exports.getLoginPage=getLoginPage;
module.exports.getProfilePage=getProfilePage;
module.exports.logout=logout;

module.exports.managePlans=managePlans;