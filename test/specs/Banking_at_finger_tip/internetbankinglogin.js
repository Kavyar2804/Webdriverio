//Test SCenario : After registering for Internet banking customer Id is generated.. 
//login as customer and add the benificary and logout

describe('Login to Internet Banking' , ()=>{

    it('Internet Banking login', async()=>{

        await browser.url('http://testingserver/domain/Online_Banking_System/index.php')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        let ele = await browser.$(".ebanking") //classname
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
        let ele3  = await browser.$("li=Fund Transfer")
        await ele3.waitForClickable({timeout:2000})
        await ele3.click()
        let title3 = await browser.getTitle()
        console.log(title3);
        expect (browser).toHaveTitleContaining('Fund Transfer')
    })
 
    it('Add Benificary' , async()=>{

        await browser.$("[name='add_beneficiary']").click()
        let title4 = await browser.getTitle()
        console.log(title4);
        expect(browser).toHaveTitleContaining('Add Beneficiary')
        await browser.$("[name='beneficiary_name']").setValue('Kavya')
        await browser.$("[name='beneficiary_acno']").setValue('1011521011494')
        await browser.$("[name='Ifsc_code']").setValue('1011')
        await browser.$("[name='beneficiary_acc_type']").selectByAttribute('value' , 'Saving')
        let ele = await browser.$("[name='add_beneficiary_btn']")
        await ele.waitForClickable({timeout:2000})
        ele.click()
        let msg = await browser.getAlertText()
        console.log(msg);
        await browser.acceptAlert()
    })

    it('Logout from application', async ()=>{

        await browser.$('#logout').click()

    })



})