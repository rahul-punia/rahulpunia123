const stripe=require("stripe")('sk_test_AorUm1KixfoW9ihbff66TsZ500dY3SF2zt');//private key  

const planModel=require("../model/planModel");
const userModel=require("../model/userModel");

async function createSession(req,res){
   try{
    //Retrieve Plan and User
    let userId=req.id;
    let {planId}=req.body;
    // let {userId,planId}=req.body;
    const user=await userModel.findById(userId);
    const plan=await planModel.findById(planId);
    // create session
    const session=await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email:user.email,
        client_reference_id:req.planId, 
        line_items: [{
          name: plan.name,
        //   discription:plan.discription,
          amount:plan.price*100, //b/z in cents
          currency:"usd",
          quantity: 1,
        }],
        success_url: 'https://localhost:3000/profile',
        cancel_url: 'https://localhost:3000',
    })
    res.status(200).json({
        status:"success",
        session
    })
}catch(err){
    res.status(200).json({
        err:err.message
    })
 }
}

module.exports.createSession=createSession;