describe('Apply for debit card' , ()=>{

it('Debitcard Application' , async ()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    await browser.scroll(0, 500)
    let ele = await browser.$("[li=Apply Debit Card]")
    await ele.waitForClickable({timeout:3000 })
    await ele.click()
   let  title = await browser.getTitle()
   console.log(title);
    await expect (browser).toHaveTitleContaining("Apply Debit Card")
    await browser.$("[name='holder_name']").setValue('Kavya')
    await browser.$("[name='pan']").setValue('abcd1234k')
    await browser.$("[name='mob']").setValue('1234567890')


    
    await browser.$("[name='acc_no']").setValue("")








})


})