let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let eachMatchHandler=require("./getLeaderBoard");
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
    // fs.writeFileSync("list.html",list);

    let a=$("li.widget-items.cta-link a").attr("href");
    // console.log(a+"rahul");
    let fulllink="https://www.espncricinfo.com"+a;
    // console.log(fulllink);
    request(fulllink,matchPageHandler);
}
function matchPageHandler(err,res,html){
    if(err==null && res.statusCode==200){
        //  console.log(res);
        //  console.log(html);
        parseMatch(html);
        }else if(res.statusCode==404){
            console.log("page not found");
        }else{
            console.log(err);
            console.log(res);
        }
}

function parseMatch(html){
    // fs.writeFileSync("data",html);
    let $=cheerio.load(html);
    //in full Page
    let allCards=$(".col-md-8.col-16");
    // console.log("allCard.html",allCards);
    // fs.writeFileSync("allCard.html",allCards);

    for(let i=0;i<allCards.length;i++){
        // let details=$(allCards[i]).find(".small.mb-0.match-description").text();
        // let result=$(allCards[i]).find(".extra-small.mb-0.match-description.match-description-bottom").text();
        // console.log("*****************************************");
        // console.log(details);
        // console.log(result);
        // console.log("*****************************************");

        let allanchors = $(allCards[i]).find(".match-cta-container a")
        let scoreCardLink = $(allanchors[0]).attr("href");
        eachMatchHandler("https://www.espncricinfo.com" + scoreCardLink);
    }
}

