const stfloginpage = require("../pageobjects/StaffLgnpage")
const stfhomepage = require("../pageobjects/StaffHomePage")
const bankinghmpage = require("../pageobjects/BankingHomepage")
const crdtcustpage = require("../pageobjects/Creditcustomerpage")
const bankhmpage = require("../pageobjects/BankingHomepage")
const custloginpage  =require("../pageobjects/IntrntbankLoginpage")
const custhmpage =require("../pageobjects/Customerhomepage")

describe('Login to application and credit customer' , ()=>{

    it('Login to application' , async()=>{

        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
        let title = await browser.getTitle()
        console.log(title);
        expect(browser).toHaveTitleContaining('Online Banking System')
        await bankinghmpage.staffloginlink()
       let title2 =  await browser.getTitle()
       console.log(title2);
       expect(browser).toHaveTitleContaining('Staff Page')
       await (await stfloginpage.lgnbtn).waitForDisplayed({timeout:3000})
       await stfloginpage.stflgnaction(210001,'password')
       let title3= await browser.getTitle()
       console.log(title3);
       expect(browser).toHaveTitleContaining('Staff Home')
       await (await stfhomepage.crdtcustbtn).waitForClickable({timeout:2000})
       await stfhomepage.crdtcustaction()
       let title4 = await browser.getTitle()
       console.log(title4);
       expect(browser).toHaveTitleContaining('Staff Home')

    })

    it('Crediting customer' , async()=>{
        await (await crdtcustpage.crdtbtn).waitForDisplayed({timeout:2000})
        await crdtcustpage.crditcusaction(1011541011519, 2000 )
        await browser.isAlertOpen()
        await browser.getAlertText()
        await browser.acceptAlert()
    })

    it('Logout from application' , async()=>{

        await (await stfhomepage.logoutbtn).waitForClickable({timeout:2000})
        await stfhomepage.logoutaction()
    })

    it('Login as customer', async()=>{
    await (await bankhmpage.Hmhomelink).waitForClickable({timeout:2000})
    await bankhmpage.homelink()
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
    it("Check statement" , async()=>{

        await (await custhmpage.statmntbtn).waitForClickable({timeout:2000})
        await custhmpage.statmnaction()

    })
    it('logout from application', async()=>{

        await (await custhmpage.logoutbtn).waitForClickable({timeout:2000})
        await custhmpage.logoutaction()
    })
})