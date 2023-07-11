//Test Scenarion: Login as a Staff and credit the amount to the customer
// and login as customer check staement for amount credited details


describe('Login and credit customer' , ()=>{

it('Login smoke', async ()=>{

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

it('Credit Customer' , async()=>{
    await browser.scroll(0, 200)
    let ele = await browser.$("[name='credit_cust_ac']")
    await ele.waitForClickable({timeout:2000})
    await ele.click()

    let title = await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Staff Home')

    await browser.$("[name='customer_account_no']").setValue('1011631011790')
    await browser.$("[name='credit_amount']").setValue('2000')
    let ele1 = await browser.$("[name='credit_btn']")
    await ele1.waitForClickable({timeout:2000})
    await ele1.click()
    let msg = await browser.getAlertText()
    console.log(msg);
    await browser.acceptAlert()
})

it('Logout from application', async ()=>{

    await browser.$("[name='logout_btn']").click()

})

it('Login as Customer and check statement' , async()=>{

    
   let hm = await browser.$("//a[.='Home']")
     await hm.waitForClickable({timeout:3000})
     await hm.click()
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
    await browser.$("//li[@class='link5']").click()
    await browser.pause(3000)

})

it('Logout from application', async ()=>{

    await browser.$('#logout').click()

})

})