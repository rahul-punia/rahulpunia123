require("chromedriver");
let swd=require("selenium-webdriver");
//Selenium
//Selenium is an open-source tool that automates web browsers. It provides a single interface 
//that lets you write test scripts in programming languages like Ruby, Java, NodeJS, PHP, Perl
//, Python, and C#, among others.

//A browser-driver then executes these scripts on a browser-instance on your device 
//(more on this in a moment)
//Selenium WebDriver
// Also known as Selenium 2.0, WebDriver executes test scripts through browser-specific drivers. It consists of:
// API
// Application Programming Interface. Ports test scripts you write in Ruby, Java, Python, or C# to Selenese (Selenium’s own scripting language), through bindings.
// Library
// Houses the API and language-specific bindings. Although plenty of third-party bindings exist to support different programming languages, the core client-side bindings supported by the main project are: Selenium Java (as selenium jar files), Selenium Ruby, Selenium dotnet (or Selenium C#, available as .dll files), Selenium Python, and Selenium JavaScript (Node).
// Driver
// Executable module that opens up a browser instance and runs the test script. Browser-specific—for instance, Google develops and maintains Chromedriver for Selenium to support automation on Chromium/Chrome.
// Framework
// Support libraries for integration with natural or programming language test frameworks, like Selenium with C

//build a browser
let bldr=new swd.Builder();
//build a tab
let driver=bldr.forBrowser("chrome").build();

// let GwillBeOpenPr=driver.get("https://www.google.com");
let HwillBeOpenPr=driver.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");

let {email,password}=require("../credentials");
let gCodeArr,gInputBox,gCodeBox;
HwillBeOpenPr.then(function(){
   let addImplicitPromise=driver.manage().setTimeouts( { implicit: 10000 } );
    return addImplicitPromise;
 }).then(function(){
   // console.log("HackerRank LoginPage is opened");
   let emailPromise=driver.findElement(swd.By.css("#input-1"));
   let passwordPromise=driver.findElement(swd.By.css("#input-2"));
   let BPrArr=Promise.all([emailPromise,passwordPromise]);
    return BPrArr;
 }).then(function(BothElement){
   let EwillbeEP=BothElement[0].sendKeys(email);//Email will be entered Promise
  let PwillbeEP=BothElement[1].sendKeys(password);//password will be entered Promise
  let BothEPwillbeEnteredPrArr=Promise.all([EwillbeEP,PwillbeEP]);
   return BothEPwillbeEnteredPrArr;
 }).then(function(){
   console.log("Email and Password will be entered");
}).then(function(){
  let LBtnPromise=driver.findElement(swd.By.css("button.ui-btn.auth-button"));
  return LBtnPromise;
}).then(function(loginBtn){
  let clickPromise=loginBtn.click();
  return clickPromise;
}).then(function(){
  console.log("login Button is clicked");
}).then(function(){
   let IPBtnAndClickPromise=navigatorfn("#base-card-1-link");  //driver.findElement(swd.By.css("#base-card-1-link"));
   return IPBtnAndClickPromise;
}).then(function(){
   console.log("IP kit page is opened");
}).then(function(){
   let WarmUpBtnAndClickPromise=navigatorfn(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link");   //driver.findElement(swd.By.css("#base-card-8-link .ui-content .ui-text"));
   return WarmUpBtnAndClickPromise;
}).then(function(){
   console.log("Warm-Up problems page is opened");
}).then(function(){
 //find all elements 
  let ArrQuesPromise=driver.findElements(swd.By.css(".js-track-click.challenge-list-item"));
// parallely get href of all elements
  return ArrQuesPromise;
}).then(function(ArrQues){
  let hrefPrArr=[];
  for( let i=0;i<ArrQues.length;i++){
     let hrefPr=ArrQues[i].getAttribute("href");
      hrefPrArr.push(hrefPr);
  }
  //solve parellely and maintain order
  let allhrefPrArr=Promise.all(hrefPrArr);
  return allhrefPrArr;
}).then(function(allhrefArr){
   //   console.log(allhrefArr);
   //   driver.get(allhrefArr[0]);
   let firstQWillBeSubmitP = questionSubmitter(allhrefArr[0]);
   return firstQWillBeSubmitP;
}).catch(function(err){
   console.log(err);
})

function questionSubmitter(qlink) {
   return new Promise(function (resolve, reject) {
       let qpP = driver.get(qlink);
       qpP.then(function () {
           let editorialWillBECLickedP = navigatorfn("a[data-attr2='Editorial']");
           return editorialWillBECLickedP;
       }).then(function () {
           let handleLockP = handleLockBtn();
           return handleLockP;
       }).then(function () {
           // code find
           let codep = getCode();
           return codep;
           // copy 
           // code paste
       }).then(function (code) {
           pasteCode(code);
        //    console.log(code);
       }).then(function () {
               console.log("Reached editorial page");
               resolve();
           }).catch(function (err) {
               reject(err);
           })
   });
}
function handleLockBtn() {
   // exist => click
   return new Promise(function (resolve, reject) {
       let lockBtnP = driver.findElement(swd.By.css("button.ui-btn.ui-btn-normal.ui-btn-primary .ui-content.align-icon-right"));
       lockBtnP.then(function (lockBtn) {
          // this code work in sir pc
         //   let actions = driver.actions({ async: true });
         //   let elemPressedP =actions.move({ origin: lockBtn }).click().perform();
          // this code work in my pc
           let elemPressedP =lockBtn.click();
           // Performs release event on target element
           return elemPressedP
       }).then(function () {
           resolve();
       }).catch(function (err) {

           console.log("Lock Btn not found");
           resolve();
       })
   })
   // move on
}

// function handleLockBtn(){
//    return new Promise(function(resolve,reject){
//       let lockBtnP=driver.findElement(swd.By.css("button.ui-btn.ui-btn-normal.ui-btn-primary .ui-content.align-icon-right"));

//       lockBtnP.then(function(lockBtn){
//          let actions=driver.actions({async:true});
//          let elemPressedP=actions.move({origin:lockBtn}).click().perform();
//          return elemPressedP;
//       }).then(function(){
//          resolve();
//       }).catch(function(err){
//          console.log("Lock Btn not found");
//          resolve();
//       })
//    })
// }



function navigatorfn(selector){
   let pPromise=new Promise(function(resolve,reject){
      let elemP=driver.findElement(swd.By.css(selector));

      elemP.then(function(elem){
         let clickP=elem.click();
         return clickP;
      }).then(function(){
         resolve();  //call next then() 
      }).catch(function(err){
         reject();  //call last catch()
      })
   })
   return pPromise;
}

function getCode() {
   return new Promise(function (resolve, reject) {
       let h3P = driver.findElements(swd.By.css(".hackdown-content h3"));
       let highlightsP = driver.findElements(swd.By.css(".hackdown-content .highlight"));
       let bArrP = Promise.all([h3P, highlightsP]);
       bArrP
           .then(
               function (bArr) {
                   let h3Arr = bArr[0];
                   let highlightsCodeArr = bArr[1];
                   gCodeArr = highlightsCodeArr;
                   let tPArr = [];

                   for (let i = 0; i < h3Arr.length; i++) {
                       let textP = h3Arr[i].getText();
                       tPArr.push(textP);
                   }
                   let alltEextPArr = Promise.all(tPArr);
                   return alltEextPArr
               }).then(
                   function (allLangArr) {
                       console.log(allLangArr);
                       let index = allLangArr.indexOf("C++");
                       let codePromise = gCodeArr[index].getText();
                       return codePromise;
                       // filter out -> C++
                   }).then(function (code) {
                       resolve(code);
                   }).catch(function (err) {
                       reject(err);
                   })
   })
}

function pasteCode(code){
    return new Promise(function(resolve,reject){
        //click on problem tab
        let goToProblemTabP=navigatorfn('a[data-attr2="Problem"]');
        
        goToProblemTabP.then(function(){
            let inputWillbeClickedP=navigatorfn(".custom-input-checkbox");
            return inputWillbeClickedP;
        }).then(function(){
            let inputBoxP=driver.findElement(swd.By.css(".custominput"));
            return inputBoxP;
        }).then(function(inputBox){
            gInputBox=inputBox;
            let codeWillBeSendP=inputBox.sendKeys(code);
            return codeWillBeSendP;
        }).then(function(){
           let ctrlAwillBePressedP=gInputBox.sendKeys(swd.Key.CONTROL+"a");
           return ctrlAwillBePressedP;
        }).then(function(){
            let ctrlXwillBePressedP=gInputBox.sendKeys(swd.Key.CONTROL+"x");
            return ctrlXwillBePressedP; 
        }).then(function(){
            let codeBoxP=driver.findElement(swd.By.css(".inputarea"));
            return codeBoxP;
        }).then(function(codeBox){
            gCodeBox=codeBox;
            let ctrlAP=codeBox.sendKeys(swd.Key.COMMAND+"a");
            return ctrlAP;
        }).then(function(){
            let ctrlVP=gCodeBox.sendKeys(swd.Key.COMMAND+"v");
            return ctrlVP;
        }).then(function(){
            console.log("code copied to input box");
        }).catch(function(err){
            console.log(err);
        })
    })
}



//*********callbackHell code **************

// HwillBeOpenPr.then(function(){
//     // console.log("HackerRank LoginPage is opened");
//     let emailPromise=driver.findElement(swd.By.css("#input-1"));

//     emailPromise.then(function(emailElement){
//       let EwillbeEP=emailElement.sendKeys("rahulpunia@gmail.com");

//       EwillbeEP.then(function(){
//           console.log("Data will be entered");
//       })
//     })
// })

//lengthy code
// HwillBeOpenPr.then(function(){
//     let addImplicitPromise=driver.manage().setTimeouts( { implicit: 10000 } );
//      return addImplicitPromise;
//   }).then(function(){
//     // console.log("HackerRank LoginPage is opened");
//     let emailPromise=driver.findElement(swd.By.css("#input-1"));
//     let passwordPromise=driver.findElement(swd.By.css("#input-2"));
//     let BPrArr=Promise.all([emailPromise,passwordPromise]);
//      return BPrArr;
//   }).then(function(BothElement){
//     let EwillbeEP=BothElement[0].sendKeys(email);//Email will be entered Promise
//    let PwillbeEP=BothElement[1].sendKeys(password);//password will be entered Promise
//    let BothEPwillbeEnteredPrArr=Promise.all([EwillbeEP,PwillbeEP]);
//     return BothEPwillbeEnteredPrArr;
//   }).then(function(){
//     console.log("Email and Password will be entered");
// }).then(function(){
//    let LBtnPromise=driver.findElement(swd.By.css("button.ui-btn.auth-button"));
//    return LBtnPromise;
// }).then(function(loginBtn){
//    let clickPromise=loginBtn.click();
//    return clickPromise;
// }).then(function(){
//    console.log("login Button is clicked");
// }).then(function(){
//     let IPBtnPromise=driver.findElement(swd.By.css("#base-card-1-link"));
//     return IPBtnPromise;
//  }).then(function(IPBtn){
//     let IPclickPromise=IPBtn.click();
//     return IPclickPromise;
//  }).then(function(){
//     console.log("IP kit page is opened");
//  }).then(function(){
//     let ArrBtnPromise=driver.findElement(swd.By.css("#base-card-8-link .ui-content .ui-text"));
//     return ArrBtnPromise;
//  }).then(function(ArrBtn){
//     let ArrclickPromise=ArrBtn.click();
//     return ArrclickPromise;
//  }).then(function(){
//     console.log("Array problems page is opened");
//  }).then(function(){
//   //find all elements 
//    let ArrQuesPromise=driver.findElements(swd.By.css(".js-track-click.challenge-list-item"));
// // parallely get href of all elements
//    return ArrQuesPromise;
// }).then(function(ArrQues){
//    // console.log(ArrQues);
//    let hrefPrArr=[];
//    for( let i=0;i<ArrQues.length;i++){
//       let hrefPr=ArrQues[i].getAttribute("href");
//        hrefPrArr.push(hrefPr);
//    }
//    //solve parellely and maintain order
//    let allhrefPrArr=Promise.all(hrefPrArr);
//    console.log(allhrefPrArr);
//    return allhrefPrArr;
// }).then(function(allhrefArr){
//    for( let i=0;i<allhrefArr.length;i++){
//       console.log(allhrefArr[i]);
//    }
// }).catch(function(err){
//     console.log(err);
// })



// .then(function(){
//    console.log("Email will be entered");
// }).then(function(){
//    //search passBox
//    let passwordPromise=driver.findElement(swd.By.css("#input-2"));
//    return passwordPromise;
// }).then(function(passwordElement){
//   let PwillbeEP=passwordElement.sendKeys(password);//password will be entered Promise
//   return PwillbeEP; 
// })