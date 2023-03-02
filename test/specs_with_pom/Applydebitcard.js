const { expect } = require("chai")
const debitcardpage = require("../pageobjects/ApplydebitcardPage")
const bankhomepage = require("../pageobjects/BankingHomepage")

describe('Apply for debit card', ()=>{

    it('Fill form for debit card' , async()=>{
        
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
       let title =  await browser.getTitle()
       console.log(title);
       //expect(browser).toHaveTitleContaining('Online Banking System')
       expect(title).to.be.include('Online Banking System')
       await browser.scroll(0,500)
       await bankhomepage.applydbtcrd()
       let title2 = await browser.getTitle()
       console.log(title2);
       //expect(browser).toHaveTitleContaining('Apply Debit Card')
       expect(title2).to.be.equal('Apply Debit Card')
       expect(await debitcardpage.APsubmitbtn.waitForClickable({timeout:3000})).to.be.true
       await debitcardpage.apllydebitcardaction('Kavya', 'abc1234', 9876543210, 1011461011518 )
       expect(await debitcardpage.dobtxtfild.isDisplayed({timeout:3000})).to.be.true
       await browser.keys('2')
       await browser.keys('8')
       await browser.keys('4')
       await browser.keys('ArrowRight')
       await browser.keys('1')
       await browser.keys('9')
       await browser.keys('9')
       await browser.keys('3')
       await debitcardpage.Apdbsubmtbtn()
    })

    it('Capture debit card no and pin' , async ()=>{

        await browser.isAlertOpen()
        let txt = await browser.getAlertText()
       let txt1 =  txt.split(" ")
       console.log(txt1);
       let dbtcardno = txt1[17]
       console.log(`Debit card no. is ${dbtcardno}`);
        let dbpin = txt1[22]
        console.log(`Debit card pin is ${dbpin}`);
        await browser.acceptAlert()

    })
})