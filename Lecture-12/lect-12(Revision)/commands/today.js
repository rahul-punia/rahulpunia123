const axios=require("axios");
var getlocation=require("../utilities/getLocation");
var getWeather=require("../utilities/getWeather");

module.exports=async function today(location){
    const city=location || getlocation();
    const weather=await getWeather(city);
    const temp=Math.floor(weather[0]["the_temp"]);
const state=weather[0]["weather_state_name"];
console.log(`Current conditions in 
        ${city} 
${temp} degree | ${state}`);
}