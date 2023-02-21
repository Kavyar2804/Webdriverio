describe('facebook', ()=>{


    it('fbLogin', async ()=>{

        await driver.url("https://www.facebook.com/r.php")
        await driver.maximizeWindow()
        await driver.pause(2000)
        await driver.$("input[name='firstname']").setValue("Kavya")
        await driver.$("input[name='lastname']").setValue('R')
        await driver.$("[name='reg_email__']").setValue('9148520950')
        await driver.$("[name='reg_passwd__']").setValue('Champu@143')
        await driver.$("#day").selectByVisibleText('17')
        //await driver.pause(2000)
        await driver.$('#month').selectByVisibleText('Mar')
        await driver.$('#year').selectByVisibleText('1999')
         let all = await driver.$$('#year')
         console.log(all);
        await driver.$("label[class='_58mt']").click()
        await driver.$("[name='websubmit']").click()
        await driver.pause(2000)
       

    })
})