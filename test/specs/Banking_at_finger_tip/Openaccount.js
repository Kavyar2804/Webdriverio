//Test Scenarion: As a customer Open an account by entering all the values for fields and login as 
//staff and approve the apllication
//export{accountno}

describe('Opening account and Approve ', async ()=>{
   let appno=0
   let accountno=0

it('EntertheApplicationdetails smoke', async ()=>{
   await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
   await browser.maximizeWindow()
   await browser.scroll(0, 200)
   let ele1 = await browser.$("li=Open Account")
   //await ele1.rightClick()
   await ele1.waitForClickable({timeout:3000})
   await browser.$("li=Open Account").click()
   await expect (browser).toHaveTitleContaining('Registration Form')
   await browser.scroll(0, 200)
   await browser.$('aria/Name').setValue("Kavya")
   await browser.$("[name='mobile']").setValue("1234567890")
   await browser.$("[name='email']").setValue("kavyar@gmail.com")
   await browser.$("[name='landline']").setValue("0801234567")
   await browser.$("[name='pan_no']").setValue("abcd1234k")
   await browser.$("[name='citizenship']").setValue('India')
   await browser.$("[name='homeaddrs']").setValue('Bangalore')
   await browser.$("[name='officeaddrs']").setValue('Banashankari')
   await browser.$("[name='pin']").setValue('560072')
   await browser.$("[name='arealoc']").setValue('Nagarbhavi')
   await browser.$("[name='nominee_name']").setValue('XYZ')
   await browser.$("[name='nominee_ac_no']").setValue('9876543210')
   await browser.$("[name='gender']").selectByVisibleText('Female')
   await browser.$("[name='state']").selectByIndex(3)
   await browser.$("[name='city']").selectByAttribute('value', 'Austin')
   await browser.$("[name='acctype']").selectByAttribute('value','Saving')
   await browser.scroll(0, 200)
   let ele  = await browser.$("[name='dob']")
   await ele.click()
   await browser.keys('2')
   await browser.keys('8')
   await browser.keys('A')
   await browser.keys('ArrowRight')
   await browser.keys('1')
   await browser.keys('9')
   await browser.keys('9')
   await browser.keys('2')
   //await browser.debug(5000)
   let ele2 = await browser.$("[name='submit']")
   await ele2.waitForClickable({timeout:3000})
   await browser.$("[name='submit']").click()
   await browser.scroll(0, 1000)
  
   let ele3 = await browser.$("[name='cnfrm-submit']")
   await ele3.waitForClickable({timeout:3000})
   await browser.$("[name='cnfrm-submit']").click()

  let msg = await browser.getAlertText()
  let apno = msg.split("")
   let aplic = apno.filter((val)=>{
      return val >= 0 &&  val<=9
   })
   console.log(aplic);
   appno = aplic.join("").trim()
   console.log(appno);

  await browser.acceptAlert()
})

it('Approving the application', async () =>
{

await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
let ele1 = await browser.$("a[href='staff_login.php']")
await ele1.waitForClickable({timeout:3000})
await browser.$("a[href='staff_login.php']").click()
let title = await browser.getTitle()
console.log(title);
await expect(browser).toHaveTitleContaining('Staff Page')

let el = await browser.$("[name='staff_id']")
await el.waitForEnabled({timeout:2000})
el.setValue('210001')

let el1 = await browser.$("[name='password']")
await el1.waitForExist({timeout:2000})
el1.setValue('password')

let el2= await browser.$("[name='staff_login-btn']")
await el2.waitForClickable({timeout:3000})
el2.click()


let ele2 = await browser.$("[name='apprvac']")
await ele2.waitForClickable({timeout:3000})
ele2.click()
let title2 = await browser.getTitle()
console.log(title2);
await expect(browser).toHaveTitleContaining("Pending Customers")

let ele3= await browser.$("[name='application_no']")
await ele3.waitForDisplayed({timeout:2000})
ele3.setValue(appno)

let ele4 = await browser.$("[name='search_application']")
await ele4.waitForEnabled({timeout:3000})
ele4.click()

let ele5 = await browser.$("[name='approve_cust']")
await ele5.waitForClickable({timeout:3000})
ele5.click()

})

it('getaccountno', async ()=>{

let msg = await browser.getAlertText()
let accno = msg.split("")
let account = accno.filter((accno)=>{

   return accno>=0 && accno<=9
})
accountno = account.join("").trim()
console.log(accountno)

await browser.acceptAlert()

})

it('Logout from application', async ()=>{

   await browser.$("[name='logout_btn']").click()

})
})
