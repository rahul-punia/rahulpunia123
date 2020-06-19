const axios=require("axios");

async function helper(){
    const response=await axios.get(`https://www.metaweather.com/api/location/search/?query=london`);
    const woeid1=response.data[0]["woeid"];
    console.log(woeid1);
    const weather=await axios.get(`https://www.metaweather.com/api/location/${woeid1}/`);
    console.log(weather.data.consolidated_weather);
}

helper();