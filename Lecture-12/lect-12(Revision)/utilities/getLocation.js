const axios=require("axios");

module.exports=async function getlocation(){
    const response=await axios.get(`http://ip-api.com/json/`);
    const location=response.data["city"];
   return location;
}

