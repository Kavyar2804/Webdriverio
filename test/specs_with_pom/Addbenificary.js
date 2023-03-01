 const bankhmpage = require("../pageobjects/BankingHomepage")
 const addbenfipage = require("../pageobjects/Addbenficiarypage")
 const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
 const custhmpage =require("../pageobjects/Customerhomepage")
 const fndtrnfrpage = require("../pageobjects/Fundtranferpage")

describe('Login to application and add benficryia' , ()=>{
it('Logint to application',async()=>{

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
it('Add benficiary' , async()=>{

    await (await custhmpage.fndtrnsrbtn).waitForClickable({timeout:2000})
    await custhmpage.fndtrnsfraction()
    let title= await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Fund Transfer')
    await (await fndtrnfrpage.addbnfibtn).waitForDisplayed({timeout:2000})
    await fndtrnfrpage.addbenfiaction()
    let title2 = await browser.getTitle()
    console.log(title2);
    expect(browser).toHaveTitleContaining('Add Beneficiary')
    await (await addbenfipage.addbtn).waitForDisplayed({timeout:2000})
    await addbenfipage.addbenfiaction('Kavya', 1011521011494, 1011,'Saving')
    await browser.isAlertOpen()
    await browser.getAlertText()
    await browser.acceptAlert()

})
it('Logout from application' , async()=>{
    await (await custhmpage.logoutbtn).waitForDisplayed({timeout:2000})
    await custhmpage.logoutaction()

})


})