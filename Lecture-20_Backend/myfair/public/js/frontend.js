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
    // console.log(backendResponse.data);
    }else{
        alert("Wrong Email or Password");
    }
}
async function logoutHelper(){
    const backendResponse=await axios.get("/logout");

    if(backendResponse.data.status=="User loggedout"){
        location.reload();
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