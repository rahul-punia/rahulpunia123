const axios=require("axios");

module.exports=async function getRawWeather(location){
   const response= await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`);
//    console.log(response.data[0]["woeid"]);
   woeid1=response.data[0]["woeid"];
   const weather= await axios.get(`https://www.metaweather.com/api/location/${woeid1}/`);
   return weather.data["consolidated_weather"];
}