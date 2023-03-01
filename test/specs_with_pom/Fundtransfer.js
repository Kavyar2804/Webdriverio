const bankhmpage = require("../pageobjects/BankingHomepage")
const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
const custhmpage = require("../pageobjects/Customerhomepage")
const fndtrnfrpage = require("../pageobjects/Fundtranferpage")
const otpPage= require("../pageobjects/FundtransferOTPpage")

describe('Fund transfer to addded benificiary' , ()=>{
    let otp=0
it('Login to application' , async ()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Online Banking System')
    await browser.scroll(0,500)
    await (await bankhmpage.HMinterntbnkbtn).waitForDisplayed({timeout:2000})
    await (await bankhmpage.HMinterntbnkbtn).moveTo()
    await (await bankhmpage.HMintrntloginbtn).waitForClickable({timeout:2000})
    await bankhmpage.intrnbnklogin()
   let title2= await browser.getTitle()
   console.log(title2);
   expect(browser).toHaveTitleContaining('Login Page')
   await (await custloginpage.lgnbtn).waitForDisplayed({timeout:2000})
   await custloginpage.Intrloginaction( 1011519, 'newpassword' )
   let title3 = await browser.getTitle()
   console.log(title3);
   expect(browser).toHaveTitleContaining('My Profile')

})
it('Select benficiary and do fund transfer', async ()=>{

    await (await custhmpage.fndtrnsrbtn).waitForClickable({timeout:2000})
    await custhmpage.fndtrnsfraction()
    let title= await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Fund Transfer')
    await (await fndtrnfrpage.sndbtn).waitForDisplayed({timeout:2000})
    await fndtrnfrpage.fundtrnsfraction('Kavya-1011521011494', 500 , 'Loan' )
    let title2 = await browser.getTitle()
    console.log(title2);
    expect(browser).toHaveTitleContaining("OTP Verification")
    let otptxt = await (await otpPage.otpmsg).getText()
     let otptxt1 = otptxt.split(" ")
     console.log(otptxt1);
    let otptxt2 = otptxt1[13]
    let otptxt3 = otptxt2.split("")
   otp = otptxt3.filter((val)=>{
        return val >=0 && val<=9
    }).join('').trim()
    console.log(otp);
    await (await otpPage.otpvrifybtn).waitForClickable({timeout:3000})
    await otpPage.otpaction(otp)
    await browser.isAlertOpen()
    await browser.getAlertText()
    await browser.acceptAlert()

})

it('Logout from application' , async()=>{
    await (await custhmpage.logoutbtn).waitForDisplayed({timeout:2000})
    await custhmpage.logoutaction()

})

})