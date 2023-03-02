const intrntrgstrpage = require("../pageobjects/InternetbankRegisterpage")
 const bankhmpage = require("../pageobjects/BankingHomepage")
const { expect } = require("chai")

describe('Internet Bamking Registrartion' , ()=>{
it('Fill form for applying for Internet Banking' , async()=>{
    await browser.url("http://testingserver/domain/Online_Banking_System/index.php")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    //expect(browser).toHaveTitleContaining('Online Banking System')
    expect(title).to.be.includes('Online Banking System')
    await browser.scroll(0,500)
    expect( await ankhmpage.HMinterntbnkbtn.waitForClickable({timeout:3000})).to.be.true
    await bankhmpage.HMinterntbnkbtn.moveTo()
    expect(await bankhmpage.HMintrntregbtn.waitForClickable({timeout:2000})).to.be.true
    await bankhmpage.intrntbnkreg()
    let title2 = await browser.getTitle()
    console.log(title2);
    //expect (browser).toHaveTitleContaining('Internet Banking Registration')
    expect(title2).to.be.equal('Internet Banking Registration')
    expect(await intrntrgstrpage.Intregsubmtbtn.waitForClickable({timeout:3000})).to.be.true
    await intrntrgstrpage.Intrntregisteraction('Kavya' , 1011461011518, 421322745568, 7642, 9876543210, 'abc1234', 0 , 'newpassword' , 'newpassword')
    expect(await intrntrgstrpage.dobtxtfild.isDisplayed({timeout:3000})).to.be.true
    await browser.keys('2')
    await browser.keys('8')
    await browser.keys('4')
    await browser.keys('ArrowRight')
    await browser.keys('1')
    await browser.keys('9')
    await browser.keys('9')
    await browser.keys('3')
    await intrntrgstrpage.IRsubmit()
})
    it("Capture customer Id" , async()=>{
        await browser.isAlertOpen()
        let txt = await browser.getAlertText()
        console.log(txt);
        let txt1 = txt.split('')
       let txt2 = txt1.filter((val)=>{
            return val>=0 && val<=9
        })
        let  customerid = txt2.join('').trim()
        console.log(`Customer ID is ${customerid}`)

    })

})