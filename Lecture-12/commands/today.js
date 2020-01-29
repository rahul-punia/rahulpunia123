const axios=require("axios");
const getlocation=require("../utilities/getLocation");
const getWeather=require("../utilities/getRawWeather");


module.exports=async function today(location){
const city= location || await getlocation(); //if location is null/undefined then call getlocation()
const weather= await getWeather(city);  //give array
const temp=Math.floor(weather[0]["the_temp"]);
const state=weather[0]["weather_state_name"];
console.log(`Current conditions in 
${city} 
         ${temp} degree | ${state}`);
// return data;
}