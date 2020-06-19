const d=document;


const loginForm=d.querySelector(".login");
const emailBox=d.querySelector(".email");
const passwordBox=d.querySelector(".password");
const logout=d.querySelector(".logout");

async function loginHelper(email,password){
    const backendResponse=await axios.post("/api/users/login",{email,password});
    // console.log(backendResponse);
    if(backendResponse.data.status="UserLogged In"){
        alert("UserLogged In");
        location.assign("/profile");
    }else{
        alert("Wrong Email or Password");
      }
}
async function logoutHelper(){
    const backendResponse=await axios.get("/logout");

    if(backendResponse.data.status=="User loggedout"){
        location.assign("/login");
        // location.reload();
    }else{
      alert("logout failed");
    }
}

if(loginForm){
loginForm.addEventListener("submit",function(e){
    // default behaviour
    e.preventDefault();//Avoid Reloading of page
    const email=emailBox.value; //i.e input.value
    const password=passwordBox.value;
    console.log(password+"   "+email);
    loginHelper(email,password);
})
}

if(logout){
    logout.addEventListener("click",function(){
        logoutHelper();
    });
}

const createPlan=d.querySelector(".createPlan");
const planNameBox=d.querySelector(".planName");
const planPriceBox=d.querySelector(".planPrice");
const planRatingBox=d.querySelector(".planRating");
const planDiscountBox=d.querySelector(".planDiscount");
const planDurationBox=d.querySelector(".planDuration");

async function createPlanHelper(PlanName,PlanPrice,PlanRating,PlanDiscount,PlanDuration){
    const backendResponse=await axios.post("/api/plans",{"name":PlanName,"price":PlanPrice,"ratingsAverage":PlanRating,"discount":PlanDiscount,"duration":PlanDuration});
    if(backendResponse.data.status="plan created"){
        alert("plan created successfully");
        location.assign("/profile");
    // console.log(backendResponse.data);
    }else{
        alert("plan not created Try Again");
    }
}

if(createPlan){
    createPlan.addEventListener("submit",function(e){
        // default behaviour
        e.preventDefault();//Avoid Reloading of page
        const PlanName=planNameBox.value; //i.e input.value
        const PlanPrice=planPriceBox.value;
        const PlanRating=planRatingBox.value;
        const PlanDiscount=planDiscountBox.value;
        const PlanDuration=planDiscountBox.value;
         
        console.log(PlanName+"   "+PlanPrice);
        createPlanHelper(PlanName,PlanPrice,PlanRating,PlanDiscount,PlanDuration);
    })
    }

    //Delete Plan
    const deletePlan=d.querySelector(".deletePlan");
    const plan_idBox=d.querySelector(".plan_id");
    
    async function deletePlanHelper(plan_id){
        const backendResponse=await axios.delete("/api/plans/"+plan_id);
        if(backendResponse.data.status=="Plan Deleted"){
            console.log(backendResponse.data);
            alert("Plan Deleted Successfully");
        }else{
            alert("Try Again Plan not Deleted");
        }
    }

    if(deletePlan){
        deletePlan.addEventListener("submit",function(e){
            e.preventDefault();
            const plan_id=plan_idBox.value;
            console.log(plan_id);
            deletePlanHelper(plan_id);
        })
    }

//Update Profile Image
const updateProfile=d.querySelector(".updateProfile");

async function updateProfileHelper(multipartFormData){
    const backendResponse=axios.patch("api/users/ProfileImage",multipartFormData);
    location.reload();
    if(backendResponse.data.status=="Image uploaded successfully"){
      alert("profile Image updated Successfully");
      location.reload();
    }else{
        alert("ProfileImage not uploaded");
    }
}

if(updateProfile){
    updateProfile.addEventListener("change",function(e){
     e.preventDefault();
     const multipartFormData=new FormData();
     multipartFormData.append("photo",updateProfile.files[0]);
     updateProfileHelper(multipartFormData);
    })
}

//forget Password
const forgetPassword=d.querySelector(".forgetPassword");
const forgetemailBox=d.querySelector(".forget_email");
async function forgetPasswordHelper(email){
    const backendResponse=await axios.patch("api/users/forgetPassword",{"email":email});
    if(backendResponse.data.status=="Token send to your email"){
        alert("Token send to your email");
        location.assign("/resetPassword");
   // const response=await axios.get("/resetPassword");//doubt why not work
    }else{
        alert("User not found");
    }
}

if(forgetPassword){
    forgetPassword.addEventListener("submit",function(e){
        e.preventDefault();
        const email=forgetemailBox.value;
        // console.log(email);
        forgetPasswordHelper(email);
    })
}



//reset Password
const resetPassword=d.querySelector(".resetPassword");
const resetTokenBox=d.querySelector(".reset_token");
const resetPasswordBox=d.querySelector(".reset_Password");
const resetConfirmPasswordBox=d.querySelector(".reset_ConfirmPassword");

async function resetPasswordHelper(resettoken,password,confirmPassword){
    const backendResponse=await axios.patch("api/users/resetPassword/"+resettoken,{password,confirmPassword});
    if(backendResponse.data.status=="Password reseted successfully"){
        alert("Password reseted successfully");
        location.assign("/login");
    }else{
        alert("Token is Invalid");
    }
}

if(resetPassword){
    resetPassword.addEventListener("submit",function(e){
        e.preventDefault();
        const resettoken=resetTokenBox.value;
        const password=resetPasswordBox.value;
        const confirmPassword=resetConfirmPasswordBox.value;
        // console.log(resettoken+"  "+password+" "+confirmPassword);
        resetPasswordHelper(resettoken,password,confirmPassword);
    })
}

//sign up
const userSignup=d.querySelector(".userSignup");
const signup_NameBox=d.querySelector(".signup_name");
const signup_EmailBox=d.querySelector(".signup_email");
const signup_passwordBox=d.querySelector(".signup_password");
const signup_confirmPasswordBox=d.querySelector(".signup_confirmPassword");

async function signupHelper(name,email,password,confirmPassword){
    const backendResponse=await axios.post("api/users/signup",{name,email,password,confirmPassword});
    console.log(backendResponse.data.status);
    if(backendResponse.data.status=="user Signuped"){
        alert("Signuped successfully");
        location.assign("/login");
    }else{
        alert(backendResponse.data.status);
    }
}

if(userSignup){
    userSignup.addEventListener("submit",function(e){
       e.preventDefault();
       const signup_Name=signup_NameBox.value;
       const signup_Email=signup_EmailBox.value;
       const signup_Password=signup_passwordBox.value;
       const signup_ConfirmPassword=signup_confirmPasswordBox.value;
       console.log(signup_Email+" "+signup_Password);
       signupHelper(signup_Name,signup_Email,signup_Password,signup_ConfirmPassword);
    })
}

// payment through stripe
const stripe = Stripe('pk_test_aKiOkzq4mJVzwyiKyljDWJUU00wYIDgAlT');
const paymentBtn=d.querySelector(".payment");

async function paymentHelper(planId){
    const response=await axios.post("/api/bookings/createSession",{planId});
    console.log("rahul"+"  "+planId);
    if(response.data.status){
        const {session}=response.data;
        const id=session.id;
        stripe.redirectToCheckout({
              sessionId: id
          }).then(function (result) {
            alert(result.error.message);  
        });
    }else{
        console.log(response.data.error);
        alert("Payment Failed");
    }
}

if(paymentBtn){
    paymentBtn.addEventListener("click",function(e){
        e.preventDefault();
       const planId=paymentBtn.getAttribute("plan-id");//plan-id is custom Attribute means created by user 
       paymentHelper(planId);
    })
}
