let cheerio=require("cheerio");
let fs=require("fs");
let request=require("request");

request("https://www.espncricinfo.com/series/_/id/8039/season/2015/icc-cricket-world-cup",dataReceiver);

function dataReceiver(err,res,html){
    if(err==null && res.statusCode==200){
    //  console.log(res);
    //  console.log(html);
    parsefile(html);
    }else if(res.statusCode==404){
        console.log("page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parsefile(html){
    let $=cheerio.load(html);
    // let list=$("ul.list-unstyled.mb-0");
    // fs.writeFileSync("list2.html",list);

    let a=$("li.widget-items.cta-link a").attr("href");//give link of next page using href of anchor tag
    console.log(a);
    let fulllink="https://www.espncricinfo.com"+a;
    console.log(fulllink);
    request(fulllink,matchPageHandler);
}

function matchPageHandler(err,res,html){
    if(err==null && res.statusCode==200){
        // console.log(html);
      let $=cheerio.load(html);
    parseMatch(html);
    }else if(res.statusCode==404){
        console.log("page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parseMatch(html){
    let $=cheerio.load(html);
    let allMatchData=$(".col-md-8.col-16"); //give array b/z multiple occurance of same element
    console.log(allMatchData.length);
    //   fs.writeFileSync("allMatchData.html",html);
    for(var i=0;i<allMatchData.length;i++){
        // console.log(allMatchData[i])
        let details=$(allMatchData[i]).find(".small.mb-0.match-description").text();
        let result=$(allMatchData[i]).find(".extra-small.mb-0.match-description.match-description-bottom").text();
        // console.log("**********************************");
        // console.log(details);
        // console.log(result);
        // console.log("**********************************");
        parsePlayer(allMatchData[i]);
    }
}

function parsePlayer(html){
    let $=cheerio.load(html);
    let a=$(".btn.btn-sm.btn-outline-dark.match-cta").attr("href");
    let fulllink="https://www.espncricinfo.com"+a;
    // console.log("fl=>"+fulllink.length);
    // console.log("fl=>"+fulllink);
    request(fulllink,playerDetails);
}

function playerDetails(err,res,html){
    if(err==null && res.statusCode==200){
        //  console.log(res);
        //  console.log(html);
        printPlayerInfo(html);
        }else if(res.statusCode==404){
            console.log("page not found");
        }else{
            console.log(err);
            console.log(res);
        } 
}
function printPlayerInfo(html){
    let $=cheerio.load(html);
   let playerName=$(".batsman-cell.text-truncate.out .small");
   let playerRun=$("tbody td.font-weight-bold");
   let country=$("h5.header-title.label").text();

   console.log("********************************");
   console.log(country);
   console.log("BATSMAN:-"+"      RUN:");

   for(var i=0;i<playerName.length;i++){
       console.log($(playerName[i]).text()+"     "+$(playerRun[i]).text());
   }
   console.log("********************************");

}