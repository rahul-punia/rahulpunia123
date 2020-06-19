const axios=require("axios");
var getlocation=require("../utilities/getLocation");
var getWeather=require("../utilities/getWeather");

module.exports=async function forecast(location){
  const city=location || getlocation();
  const weather= await getWeather(city);  //give array

console.log(`Weather Conditions in ${city}:`)
for( var i=0;i<weather.length-1;i++){
const date=weather[i].applicable_date;
const low=Math.floor(weather[i].min_temp);
const high=Math.floor(weather[i].max_temp);
const temp=Math.floor(weather[i]["the_temp"]);
const state=weather[i]["weather_state_name"];
console.log(`${date}-Low:${low} | High:${temp} | ${state}`);
}
}

