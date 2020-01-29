const axios=require("axios");
module.exports=async function getLocation(){
   const response= await axios.get(`http://ip-api.com/json/`); // json/send current location ip adress
   var location =response.data["city"];  //give location like delhi
  return location;
   }
