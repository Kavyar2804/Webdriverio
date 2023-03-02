const bankhmpage = require("../pageobjects/BankingHomepage")
const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
const custhmpage = require("../pageobjects/Customerhomepage")
const fndtrnfrpage = require("../pageobjects/Fundtranferpage")
const otpPage= require("../pageobjects/FundtransferOTPpage")
const { expect } = require("chai")

describe('Fund transfer to addded benificiary' , ()=>{
    let otp=0
it('Login to application' , async ()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Online Banking System')
    expect(title).to.be.equal('Online Banking System')
    await browser.scroll(0,500)
    expect(await bankhmpage.HMinterntbnkbtn.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.HMinterntbnkbtn.moveTo()
    expect(await bankhmpage.HMintrntloginbtn.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.intrnbnklogin()
   let title2= await browser.getTitle()
   console.log(title2);
   //expect(browser).toHaveTitleContaining('Login Page')
   expect(title2).to.be.equal('Login Page')
   expect(await custloginpage.lgnbtn.waitForClickable({timeout:2000})).to.be.true
   await custloginpage.Intrloginaction( 1011518, 'newpassword' )
   let title3 = await browser.getTitle()
   console.log(title3);
   //expect(browser).toHaveTitleContaining('My Profile')
   expect(title3).to.be.equal('My Profile')

})
it('Select benficiary and do fund transfer', async ()=>{

    expect(await custhmpage.fndtrnsrbtn.waitForClickable({timeout:2000})).to.be.true
    await custhmpage.fndtrnsfraction()
    let title= await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Fund Transfer')
    expect(title).to.be.equal('Fund Transfer')
    expect(await fndtrnfrpage.sndbtn.waitForClickable({timeout:2000})).to.be.true
    await fndtrnfrpage.fundtrnsfraction('Kavya-1011541011519', 500 , 'Loan' )
    let title2 = await browser.getTitle()
    console.log(title2);
    //expect(browser).toHaveTitleContaining("OTP Verification")
    expect(title2).to.be.equal("OTP Verification")
    let otptxt = await otpPage.otpmsg.getText()
     let otptxt1 = otptxt.split(" ")
     console.log(otptxt1);
    let otptxt2 = otptxt1[13]
    let otptxt3 = otptxt2.split("")
   otp = otptxt3.filter((val)=>{
        return val >=0 && val<=9
    }).join('').trim()
    console.log(otp);
    expect(await otpPage.otpvrifybtn.waitForClickable({timeout:3000})).to.be.true
    await otpPage.otpaction(otp)
    await browser.isAlertOpen()
    await browser.getAlertText()
    await browser.acceptAlert()

})

it('Logout from application' , async()=>{
    expect(await (await custhmpage.logoutbtn).waitForClickable({timeout:2000})).to.be.true
    await custhmpage.logoutaction()

})

})