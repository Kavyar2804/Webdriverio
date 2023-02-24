//Test Scenario: After applying for debit card use debit card number and pin and register for internet banking

describe('Internet banking Register' , ()=>{

    let customerid = 0
    it('Register For InternetBanking', async ()=>{

        await browser.url('http://testingserver/domain/Online_Banking_System/index.php')
        await browser.maximizeWindow()
        await browser.scroll(0, 500)
        let ele = await browser.$(".ebanking") //class
        await ele.waitForDisplayed({timeout:2000})
        await ele.moveTo()
        //await browser.$(".ebanking").moveTo()
        await browser.$("=Register").click() //linktext
        let title = await browser.getTitle()
        console.log(title);
        expect (browser).toHaveTitleContaining('Internet Banking Registration')
        await browser.$("[name='holder_name']").setValue('Kavya')
        await browser.$("[name='accnum']").setValue('1011631011790')
        await browser.$("[name='dbtcard']").setValue('421316226405')
        await browser.pause(3000)
        await browser.$("[name='dbtpin']").setValue('9974')
        await browser.pause(3000)
        await browser.$("[name='mobile']").setValue('1234567890')
        await browser.$("[name='pan_no']").setValue('abcd1234k')
        await browser.$("[name='last_trans']").setValue('0')
        await browser.$("[name='password']").setValue('newpassword')
        await browser.$("[name='cnfrm_password']").setValue('newpassword')
        await browser.$("[name='dob']").click()
        await browser.keys('2')
        await browser.keys('8')
        await browser.keys('A')
        await browser.keys('ArrowRight')
        await browser.keys('1')
        await browser.keys('9')
        await browser.keys('9')
        await browser.keys('2')
        let ele1 = await browser.$("[name='submit']")
        await ele1.waitForClickable({timeout:2000})
        await ele1.click()
    })

    it('GetTextfromalert' , async()=>{
        let msg= await browser.getAlertText()
        console.log(msg);
       let  custom = msg.split(" ")
       customerid = custom[3]
       console.log(customerid);
        

    })


})