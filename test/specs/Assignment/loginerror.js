describe('Login Error msg' , ()=>{

    it('login', async ()=>{
        await browser.url('https://www.facebook.com/login')
        await browser.maximizeWindow()
        let ele1 = await browser.$('#email')
        await ele1.waitForDisplayed({timeout:2000})
        await ele1.setValue('9148520950')
        let ele2 = await browser.$('#pass')
        await ele2.setValue('Kavya@143')
        let ele4 = await browser.$('#loginbutton')
        await ele4.click() 
      let ele3 = await browser.$("//div[@class='_9ay7']")
        await browser.waitUntil(async ()=>(await ele3.getText() == "The password that you've entered is incorrect. Forgotten password?",
        {timeout:5000 , timeoutmsg: "error message expected to be displayed after 5s"}))
       let msg = await ele3.getText()
       console.log(msg);

    //    expect(browser).toHaveTextContaining('error msg')
    //    await browser.pause(3000)

    })
})