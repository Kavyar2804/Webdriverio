describe('Food Ordering' , ()=>{
    let menuitem1name=0
    let menuitem1price=0
    let menuitem1qty=0
    let Addeddish1=0
    let pricedish1=0
    let qtydish1=0
    let carttotalqty=0
    let addedqtyitem1="2"
    let totalorderqty="$46"


    it('Login to account' , async()=>{
    await browser.url('http://testingserver/domain/Online_Food_Ordering_System/index.php')
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Home')
    let ele1 = await browser.$('=Login')
    await ele1.waitForClickable({timeout:2000})
    ele1.click()
    await browser.$("[name='username']").setValue('Kavya')
    await browser.$("[name='password']").setValue('password')
    let ele2 = await browser.$("[name='submit']")
    await ele2.waitForClickable({timeout:2000})
    await ele2.click()
    })


it('Check for Restaurant' , async()=>{

    
    
    let ele1 = await browser.$("//a[@href='restaurants.php']")
    ele1.waitForDisplayed({timeout:2000})
    await ele1.click()
    let title2 = await browser.getTitle()
    console.log(title2);
    expect(browser).toHaveTitleContaining('Restaurants')
    let restauname= 'Highlands Bar & Grill'
    let ele2 = await browser.$("//div[@class='bg-gray restaurant-entry']//div//div[2]//a[.='"+restauname+"']")
    await ele2.waitForDisplayed({timeout:2000})
    await ele2.click()
    let title3 = await browser.getTitle()
    console.log(title3);
    expect(browser).toHaveTitleContaining('Dishes')
})

it('Add Quantity and Add to cart', async ()=>{
    let dish1='Chicken Madeira'
    // let dish2='Signature Potato Twisters'

   let ele =  await browser.$("//a[.='"+dish1+"']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//input[@name='quantity']")
    await ele.waitForDisplayed({timeout:2000})
    await ele.setValue('2')

    let ele2 = await browser.$("//a[.='"+dish1+"']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//input[@type='submit']")
    await ele2.waitForClickable({timeout:2000})
    await ele2.click()

    // let ele3 =  await browser.$("//a[.='"+dish2+"']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//input[@name='quantity']")
    // await ele3.waitForDisplayed({timeout:2000})
    // await ele3.setValue('2')

    // let ele4 = await browser.$("//a[.='"+dish2+"']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//input[@type='submit']")
    // await ele4.waitForClickable({timeout:2000})
    // await ele4.click()
})
it('Verifying the cart' , async ()=>{


Addeddish1 = await browser.$("//div[@class='widget-body']//div[@class='title-row']").getText()
pricedish1  = await browser.$("//div[@class='widget-body']//div//input[@id='exampleSelect1']").getValue()
qtydish1 = await browser.$("//div[@class='widget-body']//div//input[@id='example-number-input']").getValue()
carttotalqty = await browser.$("//div[@class='price-wrap text-xs-center']//h3//strong").getText()
// let Addeddish2 = await  browser.$("//div[@class='widget-body']//div[3][@class='title-row']").getText()
// let pricedish2 = await browser.$("//div[@class='widget-body']//div[4]//input[@id='exampleSelect1']").getValue()
// let qtydish2 = await browser.$("//div[@class='widget-body']//div[4]//div[2]//input[@id='example-number-input']").getValue()

let item1=[]
item1.push( Addeddish1 , pricedish1 , qtydish1, carttotalqty)
console.log(item1);

// let item2=[]
// item2.push(Addeddish2,pricedish2,qtydish2)
// console.log(item2);
})

it('Fetcheing the element in menu' , async()=>{
menuitem1name = await browser.$("//img[@src='admin/Res_img/dishes/62908bdf2f581.jpg']/ancestor::div[@class='rest-logo pull-left']/following-sibling::div//a[@href='#']").getText()
menuitem1price = await browser.$("//img[@src='admin/Res_img/dishes/62908bdf2f581.jpg']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//span[@class='price pull-left']").getText()
menuitem1qty = await browser.$("//img[@src='admin/Res_img/dishes/62908bdf2f581.jpg']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-8']/following-sibling::div//input[@name='quantity']").getValue()
console.log(menuitem1name);
console.log(menuitem1price);
console.log(menuitem1qty);
})

it('Comparing the menu values with cart values' , async()=>{
expect(menuitem1name).toStrictEqual(Addeddish1)
expect(menuitem1price).toStrictEqual(pricedish1)
expect(addedqtyitem1).toEqual(qtydish1)
expect(carttotalqty).toEqual(totalorderqty)
})

it('Checkout' , async()=>{
await browser.$("=Checkout").click()
let title = await browser.getTitle()
console.log(title);
expect(browser).toHaveTitleContaining('Checkout')
let ele1 = await browser.$("[name='submit']")
await ele1.waitForClickable({timeout:2000})
await ele1.click()

let txt = await browser.getAlertText()
console.log(txt);
await browser.acceptAlert()

let text = await browser.getAlertText()
console.log(text);
await browser.acceptAlert()

})

it('myorders' , async()=>{

    let title= await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('My Orders')
})

it('Logout' , async()=>{

    await browser.$("=Logout").click()
})

})