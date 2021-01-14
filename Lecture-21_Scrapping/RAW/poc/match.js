let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let path=require("path");
const { dirname } = require("path");

let WorldCupDirPath=path.join(__dirname,"WorldCup")
fs.mkdirSync(WorldCupDirPath);//make worldcup folder/dirc in current dirc i.e poc
// request("https://www.espncricinfo.com/series/8039/scorecard/656495/australia-vs-new-zealand-final-icc-cricket-world-cup-2014-15",dataReceiver);

function eachMatchHandler(url) {
   request(url, dataReceiver);
}

function dataReceiver(err,res,html){
    if(err==null && res.statusCode==200){
    //  console.log(res);
    //  console.log(html);
    parseHTML(html);
    }else if(res.statusCode==404){
        console.log("page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}
//.match-scorecard-page div .card.content-block.match-scorecard-table
function parseHTML(html){
  let $=cheerio.load(html);
  let bothInnings=$(".match-scorecard-page div .card.content-block.match-scorecard-table");

  for(var inn=0;inn<bothInnings.length;inn++){
      let rows=$(bothInnings[i]).find("table.table.batsman tbody tr");
      
      let teamName=$(bothInnings).find("h5").text();
      teamName=teamName.split("Innings")[0].trim();
      console.log(teamName);

      for(var i=0;i<rows.length;i++){
          let colsInEveryRow=$(rows[i]).find("td");

          let isPlayer=$(colsInEveryRow[0]).hasClass("batsman-cell");

          if(isPlayer){
              let playerName=$(colsInEveryRow[0]).text();
              playerName=playerName.trim();
              let run=$(colsInEveryRow[2]).text()
              let balls=$(colsInEveryRow[3]).text();
            //   console.log(`${playerName} ${run} ${balls}`);
            playerHandler(playerName,teamName,run,balls);
          }
      }
    //   console.log("*******************************");
  }
}

function playerHandler(playerName,teamName,run,balls){
    let dirPath=path.join(WorldCupDirPath,teamName);
    let isDirPresent=fs.existsSync(dirPath);//check wheather directory present or not
    if(isDirPresent==false){
        fs.mkdirSync(dirPath); //if dir not present make dir
    }

    let filePath=path.join(WorldCupDirPath,teamName,playerName+".json");
    let isFilePresent=fs.existsSync(filePath);//check wheather file present or not

    if(isFilePresent==false){
        fs.openSync(filePath, 'w')//the w flag makes sure the file is created if not existing, and if the file exists it overwrites it with a new file, overriding its content.
                                  // Use the a flag to avoid overwriting. The file is still created if not existing.
        let entries=[];  //create new array
        let newObj={};
        newObj.Runs=run;
        newObj.Balls=balls;
        entries.push(newObj);
        let stringObj=JSON.stringify(entries);//push karne se pahle object ko string form me convert kr le 
                                             // b/z like local web storage obj store only on string form same here
        fs.writeFileSync(filePath,stringObj);
    }else{
        let content=fs.readFileSync(filePath); //get stored array
        let entries=JSON.parse(content);
        let newObj={};
        newObj.Runs=run;
        newObj.Balls=balls;
        entries.push(newObj);
        let stringObj=JSON.stringify(entries);
        fs.writeFileSync(filePath,stringObj);
    }
}


module.exports=eachMatchHandler;