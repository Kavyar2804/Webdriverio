const intrntrgstrpage = require("../pageobjects/InternetbankRegisterpage")
 const bankhmpage = require("../pageobjects/BankingHomepage")

describe('Internet Bamking Registrartion' , ()=>{
it('Fill form for applying for Internet Banking' , async()=>{
    await browser.url("http://testingserver/domain/Online_Banking_System/index.php")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Online Banking System')
    await browser.scroll(0,500)
    await (await bankhmpage.HMinterntbnkbtn).waitForDisplayed({timeout:3000})
    await (await bankhmpage.HMinterntbnkbtn).moveTo()
    await (await bankhmpage.HMintrntregbtn).waitForDisplayed({timeout:2000})
    await bankhmpage.intrntbnkreg()
    let title2 = await browser.getTitle()
    console.log(title2);
    expect (browser).toHaveTitleContaining('Internet Banking Registration')
    await (await intrntrgstrpage.Intregsubmtbtn).waitForClickable({timeout:3000})
    await intrntrgstrpage.Intrntregisteraction('Kavya' , 1011541011519, 421369062767, 5383, 9876543210, 'abc1234', 0 , 'newpassword' , 'newpassword')
    await (await intrntrgstrpage.dobtxtfild).waitForDisplayed({timeout:3000})
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