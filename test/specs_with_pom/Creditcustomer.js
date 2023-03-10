const stfloginpage = require("../pageobjects/StaffLgnpage")
const stfhomepage = require("../pageobjects/StaffHomePage")
const bankinghmpage = require("../pageobjects/BankingHomepage")
const crdtcustpage = require("../pageobjects/Creditcustomerpage")
const bankhmpage = require("../pageobjects/BankingHomepage")
const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
const custhmpage =require("../pageobjects/Customerhomepage")
const { expect } = require("chai")

describe('Login to application and credit customer' , ()=>{
    it('Login to application smoke' , async()=>{

        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
        let title = await browser.getTitle()
        console.log(title);
        //expect(browser).toHaveTitleContaining('Online Banking System')
        expect(title).to.be.include('Online Banking System')
        await bankinghmpage.staffloginlink()
       let title2 =  await browser.getTitle()
       console.log(title2);
       //expect(browser).toHaveTitleContaining('Staff Page')
       expect(title2).to.be.contains('Staff Page')
       expect(await stfloginpage.lgnbtn.waitForClickable({timeout:3000})).to.be.true
       await stfloginpage.stflgnaction(210001,'password')
       let title3= await browser.getTitle()
       console.log(title3);
       //expect(browser).toHaveTitleContaining('Staff Home')
       expect(title3).to.be.contain('Staff Home')
       expect(await stfhomepage.crdtcustbtn.waitForClickable({timeout:2000})).to.be.true
       await stfhomepage.crdtcustaction()
       let title4 = await browser.getTitle()
       console.log(title4);
       //expect(browser).toHaveTitleContaining('Staff Home')
       expect(title4).to.be.includes('Staff Home')

    })

    it('Crediting customer' , async()=>{
        expect(await crdtcustpage.crdtbtn.waitForClickable({timeout:2000})).to.be.true
        await crdtcustpage.crditcusaction(1011461011518, 2000 )
        await browser.isAlertOpen()
        await browser.getAlertText()
        await browser.acceptAlert()
    })

    it('Logout from application' , async()=>{

        expect(await stfhomepage.logoutbtn.waitForClickable({timeout:2000})).to.be.true
        await stfhomepage.logoutaction()
    })

    it('Login as customer', async()=>{
    expect(await bankhmpage.Hmhomelink.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.homelink()
    let title = await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Online Banking System')
    expect(title).to.be.equal('Online Banking System')
    await browser.scroll(0,500)
    expect(await bankhmpage.HMinterntbnkbtn.waitForClickable({timeout:2000})).to.be.true
    await (await bankhmpage.HMinterntbnkbtn).moveTo()
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
    it("Check statement" , async()=>{

        expect(await custhmpage.statmntbtn.waitForClickable({timeout:2000})).to.be.true
        await custhmpage.statmnaction()

    })
    it('logout from application', async()=>{

        expect(await custhmpage.logoutbtn.waitForClickable({timeout:2000})).to.be.true
        await custhmpage.logoutaction()
    })
})