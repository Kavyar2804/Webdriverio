describe('Apply for debit card' , ()=>{

it('Debitcard Application' , async ()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    await browser.scroll(0, 500)
    let ele = await browser.$("[li=Apply Debit Card]")
    await ele.waitForClickable({timeout:3000 })
    await ele.click()