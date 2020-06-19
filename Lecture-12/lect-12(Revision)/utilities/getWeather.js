const axios=require("axios");

module.exports=async function getweather(location){
    const response=await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`);
    const woeid1=response.data[0]["woeid"];
    console.log(woeid1);
    const weather=await axios.get(`https://www.metaweather.com/api/location/${woeid1}/`);
    return weather.data.consolidated_weather;
}
