 const bankhmpage = require("../pageobjects/BankingHomepage")
 const addbenfipage = require("../pageobjects/Addbenficiarypage")
 const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
 const custhmpage =require("../pageobjects/Customerhomepage")
 const fndtrnfrpage = require("../pageobjects/Fundtranferpage")
const { expect } = require("chai")

describe('Login to application and add benficryia' , ()=>{
it('Logint to application',async()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Online Banking System')
    expect(title).to.be.include('Online Banking System')
    await browser.scroll(0,500)
    expect(await bankhmpage.HMinterntbnkbtn.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.HMinterntbnkbtn.moveTo()
    expect(await bankhmpage.HMintrntloginbtn.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.intrnbnklogin()
   let title2= await browser.getTitle()
   console.log(title2);
   //expect(browser).toHaveTitleContaining('Login Page')
   expect(title2).to.be.include('Login Page')
   expect(await custloginpage.lgnbtn.waitForClickable({timeout:2000})).to.be.true
   await custloginpage.Intrloginaction( 1011518, 'newpassword' )
   let title3 = await browser.getTitle()
   console.log(title3);
   //expect(browser).toHaveTitleContaining('My Profile')
   expect(title3).to.be.include('My Profile')
})
it('Add benficiary' , async()=>{

    expect(await custhmpage.fndtrnsrbtn.waitForClickable({timeout:2000})).to.be.true
    await custhmpage.fndtrnsfraction()
    let title= await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Fund Transfer')
    expect(title).to.be.include('Fund Transfer')
    expect(await fndtrnfrpage.addbnfibtn.waitForClickable({timeout:2000})).to.be.true
    await fndtrnfrpage.addbenfiaction()
    let title2 = await browser.getTitle()
    console.log(title2);
    //expect(browser).toHaveTitleContaining('Add Beneficiary')
    expect(title2).to.be.include('Add Beneficiary')
    expect(await addbenfipage.addbtn.waitForClickable({timeout:2000})).to.be.true
    await addbenfipage.addbenfiaction('Kavya', 1011541011519, 1011,'Saving')
    await browser.isAlertOpen()
    await browser.getAlertText()
    await browser.acceptAlert()

})
it('Logout from application' , async()=>{
    expect(await custhmpage.logoutbtn.waitForClickable({timeout:2000})).to.be.true
    await custhmpage.logoutaction()

})
try
{

}
catch
{
    
}

})