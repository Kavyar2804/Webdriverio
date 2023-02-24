
//Test Scenarion - As a customer once after getting account number apply  for debit card

describe('Apply for debit card' , ()=>{

    let debitcardno =0
    let pinno=0 
it('Debitcard Application' , async ()=>{

    await browser.url("http://testingserver/domain/Online_Banking_System/")
    await browser.maximizeWindow()
    await browser.scroll(0, 500)
    let ele = await browser.$("li=Apply Debit Card")
    await ele.waitForClickable({timeout:3000 })
    await ele.click()
   let  title = await browser.getTitle()
   console.log(title);
    await expect (browser).toHaveTitleContaining("Apply Debit Card")
    await browser.scroll(0, 200)
    let ele2 = await browser.$("[name='dob']")
    await ele2.waitForClickable({timeout:2000})
    await ele2.click()
    await browser.keys('2')
    await browser.keys('8')
    await browser.keys('A')
    await browser.keys('ArrowRight')
    await browser.keys('1')
    await browser.keys('9')
    await browser.keys('9')
    await browser.keys('2')
    await browser.$("[name='holder_name']").setValue('Kavya')
    await browser.$("[name='pan']").setValue('abcd1234k')
    await browser.$("[name='mob']").setValue('1234567890')
    await browser.$("[name='acc_no']").setValue('1011631011790')
   let ele3 = await browser.$("//input[@type='submit']")
   await ele3.waitForClickable({timeout:3000 , timeoutMsg:'element not found'})
   await ele3.click()
})
it('Internet banking deatils' , async ()=>{

let msg = await browser.getAlertText()
let debit = msg.split(" ")
console.log(debit);
debitcardno= debit[17]
console.log(debitcardno);
pinno=debit[22]
console.log(pinno);
// debitcard= debit.filter((debit)=>{
//     return debit>=0 &&  debit<=9
// })
// debitcardno = debitcard.join("").trim()
// console.log(debitcardno);

// let pin = debit.filter((debit)=>{ 
//     return debit>=0 && debit<=9
// })
// pinno = pin.join("").trim()
// console.log(pinno);
await browser.acceptAlert()
})

})