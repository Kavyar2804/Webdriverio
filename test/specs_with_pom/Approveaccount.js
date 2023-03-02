const staffloginpage = require("../pageobjects/StaffLgnpage")
const staffhomepage = require("../pageobjects/StaffHomePage")
const bankinghomepage = require("../pageobjects/BankingHomepage")
const approveaccountpage = require("../pageobjects/Apprvaccountpage")
const { expect } = require("chai")

describe('Login as staff and approve application' , ()=>{


    it('Login as staff', async()=>{

        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
        let title = await browser.getTitle()
        console.log(title);
        //expect(browser).toHaveTitleContaining('Online Banking System')
        expect(title).to.contain('Online Banking System')
        await bankinghomepage.staffloginlink()
       let title2 =  await browser.getTitle()
       console.log(title2);
       //expect(browser).toHaveTitleContaining('Staff Page')
       expect(title2).to.be.contains('Staff Page')
       expect (await staffloginpage.lgnbtn.waitForClickable({timeout:3000})).to.be.true
       await staffloginpage.stflgnaction(210001,'password')
       let title3= await browser.getTitle()
       console.log(title3);
       //expect(browser).toHaveTitleContaining('Staff Home')
       expect(title3).to.be.includes('Staff Home')
       expect( await staffhomepage.apprvaccbtn.waitForClickable({timeout:2000})).to.be.true
       await staffhomepage.apprvcusaction()
       expect(await approveaccountpage.applicatnumtxtfild.isDisplayed({timeout:2000})).to.be.true
       await approveaccountpage.apprvaccaction('368638628')
      
    })

    it('Get account Number' , async ()=>{

        await browser.isAlertOpen()
        let txt = await browser.getAlertText()
        let txt1 =  txt.split("")
       let txt2 =  txt1.filter((val)=>{
            return val>=0 && val<=9

        })
      let accno = txt2.join("").trim()
      console.log(`The account number is ${accno}`);
      await browser.acceptAlert()

    })

    it('Logout from application' , async()=>{

        expect(await staffhomepage.logoutbtn.waitForClickable({timeout:2000})).to.be.true
        await staffhomepage.logoutaction()
    })
})