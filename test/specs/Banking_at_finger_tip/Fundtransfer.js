//Test Scenario - Login as custtomer and do fund transfer for the added benficiary

describe('Login to account and fundtransfer', ()=>{

    let otp=0
    it('Login' , async ()=>{

        await browser.url('http://testingserver/domain/Online_Banking_System/index.php')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        let ele = await browser.$(".ebanking")
        await ele.waitForDisplayed({timeout:2000})
        await ele.moveTo()
        await browser.$("//a[@href='customer_login.php']/li[1]").click() 
        let title = await browser.getTitle()
        console.log(title);
        expect (browser) .toHaveTitleContaining('Login Page')
        await browser.$("[name='customer_id']").setValue('1011790')
        await browser.$("[name='password']").setValue('newpassword')
        let ele1 = await browser.$("[name='login-btn']")
        await ele1.waitForClickable({timeout:2000})
        await ele1.click()
        let title2 = await browser.getTitle()
        console.log(title2);
        expect (browser).toHaveTitleContaining('My Profile')

    })

    it('FundTransfer', async ()=>{
        let ele  = await browser.$("li=Fund Transfer")
        await ele.waitForClickable({timeout:2000})
        await ele.click()
        let title = await browser.getTitle()
        console.log(title);
        expect (browser).toHaveTitleContaining('Fund Transfer')
        await browser.$("[name='beneficiary']").selectByAttribute('value', '1011521011494')
        await browser.$("[name='trnsf_amount']").setValue('1000')
        await browser.$("[name='trnsf_remark']").setValue('Testing')
        let ele1 = await browser.$("[name='fnd_trns_btn']")
        await ele1.waitForClickable({timeout:2000})
        await ele1.click()
       let element  =  await browser.$(".OTP_msg")
       let otptext = await element.getText()
       console.log(otptext);
       let otptx= otptext.split(" ")
       //console.log(otptx);
        otptxt = otptx[13]
        let  otp1 = otptxt.split('')
        let otp2 = otp1.filter((otp1)=>{
            return otp1>=0 && otp1<=9
        })
        otp = otp2.join('').trim()
        console.log(otp);
        let title3 = await browser.getTitle()
        console.log(title3);
        expect(browser).toHaveTitleContaining("OTP Verification")

        await browser.$("[name='otpcode']").setValue(otp)
       let  ele5 = await browser.$("[name='verify-btn']")
       await ele5.waitForClickable({timeout:2000})
       await ele5.click()
       
       let msg = await browser.getAlertText()
       console.log(msg);
       await browser.acceptAlert()
      

    })
    it('Logout from application', async ()=>{

        await browser.$('#logout').click()

    })

})