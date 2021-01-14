// npm install selenium-webdriver
//npm install chromedriver
require("chromedriver");
let swd = require("selenium-webdriver");
const challenges=require("./challenges");
// build browser
let bldr = new swd.Builder();
// build a tab
let driver = bldr.forBrowser("chrome").build();
// pending 
let GWillBeOpendP = driver.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
let gCodeArr, gInputBox, gCodeBox;

let { email, password } = require("../credentials");

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
    await waitForLoader();//optional
    let manageP=driver.findElements(swd.By.css(".nav-tabs.nav.admin-tabbed-nav .backbone"));
    let manageArr=await manageP;
    let manageChallengeselem=manageArr[1];
    let manageChallengesClicked=await manageChallengeselem.click();
    // let createChallengeBtnFindAclickedP=navigatorfn(".btn.btn-green.backbone.pull-right");
    // await createChallengeBtnFindAclickedP;
    const createChallengePageLink=await driver.getCurrentUrl();

    for(let i=0;i<challenges.length;i++){
        await driver.get(createChallengePageLink);
        await waitForLoader();
        await createChallenge(challenges[i]);
    }
    }catch(err){
        console.log(err);
    }
}

let login=fn();


async function createChallenge(challenge) {
    // select , data enter=> normally enter, modify
    let createChBtn = await
        driver.findElement(swd.By.css(".btn.btn-green.backbone.pull-right"));
    await createChBtn.click();
    let cSelector = ".CodeMirror textarea";
    let parent = ".CodeMirror div";
    let selectors = ["#name", "#preview",
        `#problem_statement-container ${cSelector}`,
        `#input_format-container ${cSelector}`,
        `#constraints-container ${cSelector}`,
        `#output_format-container ${cSelector}`, "#tags_tag"];
    let allElemPArr = selectors.map(function (elselector) {
        return driver.findElement(swd.By.css(elselector));
    })
    let allElements = await Promise.all(allElemPArr);
    await allElements[0].sendKeys(challenge["Challenge Name"]);
    await allElements[1].sendKeys(challenge["Description"]);
    await enterData(allElements[2], `#problem_statement-container ${parent}`, challenge["Problem Statement"]);
    await enterData(allElements[3], `#input_format-container ${parent}`, challenge["Input Format"]);
    await enterData(allElements[4], `#constraints-container ${parent}`, challenge["Constraints"]);
    await enterData(allElements[5], `#output_format-container ${parent}`, challenge["Output Format"]);
    await allElements[6].sendKeys(challenge["Tags"]);
    await allElements[6].sendKeys(swd.Key.ENTER);
    // find save btn
    await navigatorfn(".save-challenge.btn.btn-green");
    // click
}

async function enterData(element, parentSelc, data) {
    // resize parent
    let parent = await driver.findElement(swd.By.css(parentSelc));
    // script => page
    await driver.executeScript("arguments[0].style.height=`${10}px`", parent);
    await element.sendKeys(data);
    // enter data
}
async function waitForLoader() {
    // wait
    let loader = (await driver).findElement(swd.By.css("#ajax-msg"));
    await driver.wait(swd.until.elementIsNotVisible(loader));
}

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


