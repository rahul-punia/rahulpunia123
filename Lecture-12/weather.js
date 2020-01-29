const today=require("./commands/today");
const forecast=require("./commands/forecast");
const help=require("./commands/help");
const version=require("./commands/version");

const minimist=require("minimist");
const input=minimist(process.argv.slice(2));//convert input in to object form
// console.log(input);
const location=input.location || input.l;
const cmd=input["_"][0]; //array 0th value give command
// console.log("rahul");

if(cmd=="today"){
 today(location);
}else if(cmd=="forecast"){
forecast(location);
}else if(cmd=="help"){
help();
}else if(cmd=="version"){
version();
}else{
    console.log("Wrong Command");
}

// const axios=require("axios");

// async function helper(){
//    const response= await axios.get("https://www.metaweather.com/api/location/search/?query=london");
//    console.log(response.data[0]["woeid"]);
//   var woeid1=response.data[0]["woeid"]; //extract data property from response b\z it contain many information/data
//    const weather= await axios.get(`https://www.metaweather.com/api/location/${woeid1}/`);
//    console.log(weather.data.consolidated_weather);
// }
 
// helper();