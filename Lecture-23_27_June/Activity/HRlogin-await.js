// npm install selenium-webdriver
//npm install chromedriver
require("chromedriver");
let swd = require("selenium-webdriver");
// build browser
let bldr = new swd.Builder();
// build a tab
let driver = bldr.forBrowser("chrome").build();
// pending 
let GWillBeOpendP = driver.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
// let gCodeArr, gInputBox, gCodeBox;

let { email, password } = require("./credentials");

async function fn(){
    try{
    await GWillBeOpendP;
    let addImpWaitP = driver.manage().setTimeouts({ implicit: 10000 });
    let emailPromise = driver.findElement(swd.By.css("#input-1"));
    let passwordPromise = driver.findElement(swd.By.css("#input-2"));
    let bothElemP2=await Promise.all([emailPromise,passwordPromise]);
    let EWillBeEP2 = bothElemP2[0].sendKeys(email);
    let passwordEnteredP2 = bothElemP2[1].sendKeys(password);
    let bothKeysWillBeEnteredP2 =await Promise.all([EWillBeEP2, passwordEnteredP2]);
    let loginWillClickedP2 = navigatorfn("button.auth-button");
    let loginBtn2= await loginWillClickedP2;
    let dropdown=navigatorfn(".backbone.nav_link.js-dropdown-toggle.js-link.toggle-wrap");
    await dropdown;
    let administrationPageP=navigatorfn('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await administrationPageP;
    let manageP=driver.findElements(swd.By.css(".nav-tabs.nav.admin-tabbed-nav .backbone"));
    let manageArr=await manageP;
    let manageChallengeselem=manageArr[1];
    let manageChallengesClicked=await manageChallengeselem.click();
    let createChallengeBtnFindAclickedP=navigatorfn(".btn.btn-green.backbone.pull-right");
    await createChallengeBtnFindAclickedP;
    }catch(err){
        console.log(err);
    }
}

let login=fn();

// async function fun2(){

// }

// promise=> resolve => find,click
async function navigatorfn(selector) {
        try{
        let elemP = driver.findElement(swd.By.css(selector));
        let elem=await elemP;
        let clickP =elem.click();
         await clickP;
        }catch(err){
            console.log(err);
            return Promise.reject(err);
        }
}
