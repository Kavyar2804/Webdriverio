const staffloginpage = require("../pageobjects/StaffLgnpage")
const staffhomepage = require("../pageobjects/StaffHomePage")
const bankinghomepage = require("../pageobjects/BankingHomepage")
const approveaccountpage = require("../pageobjects/Apprvaccountpage")

describe('Login as staff and approve application' , ()=>{


    it('Login as staff', async()=>{

        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
        let title = await browser.getTitle()
        console.log(title);
        expect(browser).toHaveTitleContaining('Online Banking System')
        await bankinghomepage.staffloginlink()
       let title2 =  await browser.getTitle()
       console.log(title2);
       expect(browser).toHaveTitleContaining('Staff Page')
       await (await staffloginpage.lgnbtn).waitForDisplayed({timeout:3000})
       await staffloginpage.stflgnaction(210001,'password')
       let title3= await browser.getTitle()
       console.log(title3);
       expect(browser).toHaveTitleContaining('Staff Home')
       await (await staffhomepage.apprvaccbtn).waitForClickable({timeout:2000})
       await staffhomepage.apprvcusaction()
       await (await approveaccountpage.applicatnumtxtfild).waitForDisplayed({timeout:2000})
       await approveaccountpage.apprvaccaction('362391891')

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
})