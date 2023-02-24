describe('Find Elements Operation', ()=>{

    it('Login', async ()=>{

        await browser.url("http://testingserver/domain/Online_Banking_System/")
        await browser.maximizeWindow()
        let ele1 = await browser.$("a[href='staff_login.php']")
        await ele1.waitForClickable({timeout:3000})
        await browser.$("a[href='staff_login.php']").click()
        let title = await browser.getTitle()
        console.log(title);
        await expect(browser).toHaveTitleContaining('Staff Page')
        
        let el = await browser.$("[name='staff_id']")
        await el.waitForEnabled({timeout:2000})
        await el.setValue('210001')
        
        let el1 = await browser.$("[name='password']")
        await el1.waitForExist({timeout:2000})
        await el1.setValue('password')
        
        let el2= await browser.$("[name='staff_login-btn']")
        await el2.waitForClickable({timeout:3000})
        await el2.click()
        
        let title1 = await browser.getTitle()
        console.log(title1);
        expect(browser).toHaveTitleContaining('Staff Home')
        
        })


        it('View active customer table' , async ()=>{

          let ele =  await browser.$("[name='viewdet']")
          await ele.waitForClickable({timeout:2000})
          await ele.click()

         let count = browser.$$("//tbody/tr/following-sibling::tr").length
         console.log(`******************* ${count}`);

         let  list = browser.$$("//tbody/tr/following-sibling::tr")
         
        await list.forEach(element=>{
            console.log(element.getText());
        })


        })



    

})