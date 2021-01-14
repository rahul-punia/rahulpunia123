const d=document;
const loginForm=d.querySelector(".login");
const emailBox=d.querySelector(".email");
const passwordBox=d.querySelector(".password");
const logout=d.querySelector(".logout");

async function loginHelper(email,password){
    const backendResponse=await axios.post("/api/users/login",{email,password});
    console.log("BSD"+backendResponse.data.status);
    if(backendResponse.data.status=="UserLogged In"){
        alert("UserLogged In");
        location.assign("/profile");    
    }else if(backendResponse.data.status=="Wrong Password"){
        alert("Enter Correct Password");
    }else{
        alert("Invalid Email or Password");
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
    console.log("Eamil- "+email)
    const backendResponse=await axios.patch("api/users/forgetPassword",{"email":email});
    if(backendResponse.data.status=="Token send to your email"){
        alert("Token send to your email");
        location.assign("/resetPassword");
   // const response=await axios.get("/resetPassword");//doubt why not work
    }else{
        console.log("Invalid Email")
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
        alert("Invalid Email or Password");
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


const registerComplaint=d.querySelector(".registerComplaint");
const RC_NameBox=d.querySelector(".RC_Name");
const RC_EmailBox=d.querySelector(".RC_Email");
const RC_CNBox=d.querySelector(".RC_CN");
const RC_DOCBox=d.querySelector(".RC_DOC");
const RC_SYZBox=d.querySelector(".RC_SYZ");
const RC_SBCBox=d.querySelector(".RC_SBC");
const RC_CDetailsBox=d.querySelector(".RC_CDetails");
const RC_AddressBox=d.querySelector(".RC_Address");

async function registerComplaintHelper(name,email,ContactNumber,Date,Zone,Broad_Category,Complaint_Details,ComplaintAddress){
   console.log(name+" "+email+" "+Date+" "+Zone+" "+Broad_Category+" "+Complaint_Details+" "+ComplaintAddress);
    const backendResponse=await axios.post("/api/complaint/complaintRegister",{name,email,ContactNumber,Date,Zone,Broad_Category,Complaint_Details,ComplaintAddress});
    console.log(backendResponse.data.status);
    if(backendResponse.data.status=="complaint Submitted Successfully"){
        alert("Your complaint submitted successfully. "+"Please Note your Complaint Number to check your complaint Status-"+backendResponse.data.ComplaintNumber);
        location.assign("/login");
    }else{
        alert(backendResponse.data.status);
    }
}

if(registerComplaint){

    registerComplaint.addEventListener("submit",function(e){ //V.Imp Add Event Listener
       e.preventDefault();
       const name=RC_NameBox.value;
       const email=RC_EmailBox.value;
       const ContactNumber=RC_CNBox.value;
       const Date=RC_DOCBox.value;
       const Zone=RC_SYZBox.value;
       const BroadCategory=RC_SBCBox.value;
       const ComplaintD=RC_CDetailsBox.value;
       const Address=RC_AddressBox.value;

    //    console.log(signup_Email+" "+signup_Password);
       registerComplaintHelper(name,email,ContactNumber,Date,Zone,BroadCategory,ComplaintD,Address);
    })
}


const complaintStatus=d.querySelector(".complaint_Status");
const CNameBox=d.querySelector(".CName");
const CEmailBox=d.querySelector(".CEmail");
const CCNBox=d.querySelector(".CCN");
const CNBox=d.querySelector(".CN");

async function checkcomplaintStatus(name,email,ContactNumber,ComplaintNumber){
    console.log("Rahul "+name+" "+email+" "+ContactNumber+" "+ComplaintNumber);
    const backresponse=await axios.post("/api/complaint/complaintStatus",{name,email,ContactNumber,ComplaintNumber});
  
    if(backresponse.data.status=="Complaint Exist"){
        alert("Your Complaint is under process.")
    }else{
        console.log(name+" "+email+" "+ContactNumber+" "+ComplaintNumber);
        alert("Please Enter correct details.");
    }
}

if(complaintStatus){
    complaintStatus.addEventListener("submit",function(e){
        e.preventDefault();
        console.log("Rahul  "+CNameBox.value);
        const name=CNameBox.value;
        const email=CEmailBox.value;
        const ContactNumber=CCNBox.value;
        const ComplaintNumber=CNBox.value;
        checkcomplaintStatus(name,email,ContactNumber,ComplaintNumber);
    })
}


