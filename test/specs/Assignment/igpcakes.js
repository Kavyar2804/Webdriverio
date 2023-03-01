describe("igp cake ordering" , ()=>{
    let cartitem1=0
    let cartitem2=0
    let cakenameincart=0
    let cakenameinmenu=0
    let cakepriceinmenu=0
    let cakepriceincart=0

it('Select cake and addons' , async ()=>{
await browser.url('https://www.igp.com/')
await browser.maximizeWindow()
let title = await browser.getTitle()
console.log(title);
expect(browser).toHaveTitleContaining("'IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online'")
// let ele = await browser.$("//section[@id='selection-panel']//div[@class='sel-pnl-re']//a[contains(.,'Cakes')]")
// await ele.waitForDisplayed({timeout:2000})
// await ele.click()

let search = await browser.$("[name='q']")
await search.waitForDisplayed({timeout:2000})
await search.setValue("cakes")

let sug = await browser.$(".cards-li-list")
await sug.waitForDisplayed({timeout:5000})

let cho = await browser.$("//li[@class='cards-li']//a[contains(.,'Chocolate Cakes')]")
await cho.waitForClickable({timeout:2000})
await cho.click()


let title1 = await browser.getTitle()
console.log(title1);
expect(browser).toHaveTitleContaining("Online Cake Delivery | Order & Send Best Cakes Online - IGP Cakes")
// let ele1 = await browser.$("//div[@class='lense-horizontal']//a[@href='/chocolate-cakes']")
// await ele1.waitForClickable({timeout:2000})
// await browser.scroll(0, 300)
// await browser.pause(3000)
// await ele1.click()

for (let i = 0; i < 4; i++) {

    await browser.scroll(0, 1000)
    
}

let ele2 = await browser.$("//p[.='Valentine Chocolate Heart Pinata Cake (750 gm)']")
await ele2.waitForDisplayed({timeout:2000})
await ele2.click()


})
xit('Adding to cart' , async()=>{

    let title2 = await browser.getTitle()
    console.log(title2);
    expect(browser).toHaveTitleContaining("Order Valentine Chocolate Heart Pinata Cake 750 gm Online at Best Price, Free Delivery|IGP Cakes")
    
    await browser.scroll(0,300)
    await browser.$("//a[@data-id='591969']").click()
    //await browser.$("//input[@id='country']").setValue("INDIA")
    
    let ele11 = await browser.$("//a[@data-price='2495']//span[@class='upsell-price']")
    cakepriceinmenu =  await ele11.getText()
   console.log(cakepriceinmenu);

   let ele12 = await browser.$("//h1[@class='prod-name']")
   cakenameinmenu = await ele12.getText()
   console.log(cakenameinmenu);

    await browser.$("#location-input").setValue("560072")

    it('Should wait unitl text has changed' , async()=>{

        await browser.waitUntil(async ()=>(await browser.$("#available-pincode").getText() == 'Available' , 
        {timeout:5000 , timeoutMsg: 'expected text to be different after 5s'}) )
    })
//    let  ele =  browser.$("#available-pincode") 
//    await ele.waitUntil(async ()=>{
//     return (await this.getText()) == 'Available'
//    }, {timeout:5000 , timeoutMsg: 'expected text to be different after 5s'}) 

    await browser.scroll(0, 200)

    await browser.$("//label[@for='Select_Date']").click()
    await browser.$("//div[@id='ui-datepicker-div']//a[@data-handler='next']").click()
    await browser.$("//tbody//tr//td//a[contains(.,'11')]").click()
    await browser.scroll(0,200)

   let ele1 = await browser.$("//select[@id='timepicker']")
   await ele1.waitForDisplayed({timeout:6000})
   await browser.$("//select[@id='timepicker']").selectByAttribute('value', '2')

    await browser.scroll(0, 1000)

   let ele3 =  await browser.$("//div[@class='add-ao-icon-revamp'][@data-id='607738'][contains(.,'ADD')]")
   await ele3.waitForClickable({timeout:3000})
   await ele3.click()

   await browser.scroll(0, 500)

   let ele5 = await browser.$("//div[@class='add-ao-icon-revamp'][@data-id='589120'][contains(.,'ADD')]")
   await ele5.waitForClickable({timeout:2000})
   await ele5.click()

   await browser.scroll(0, 200)

   let ele4 = await browser.$("//div[@class='add-ao-icon-revamp'][@data-id='579648'][contains(.,'ADD')]")
  await ele4.waitForClickable({timeout:2000})
  await ele4.click()

await browser.scroll(0, 700)

let ele6 = await browser.$("//div[@class='add-ao-icon-revamp'][@data-id='602360'][contains(.,'ADD')]")
  await ele6.waitForClickable({timeout:2000})
  await ele6.click()

  await browser.scroll(0, 1000)


 let ele7 =  await browser.$("#add-cart")
 await ele7.waitForDisplayed({timeout:5000})
 await ele7.waitForClickable({timeout:5000})
 await ele7.click()
let pgtitle = await browser.getTitle()
console.log(pgtitle);
expect(browser).toHaveTitleContaining("Shopping Cart")

})

xit('Feting cart items' , async()=>{

    let  ele = await browser.$("//p[@class='c-item-name '][contains(.,'Sparkle Candle')]")
    cartitem1=await ele.getText()
    console.log(cartitem1);

    let ele1= await browser.$("//p[@class='c-item-name '][contains(.,'Money Plant')]")
    cartitem2= await ele1.getText()
    console.log(cartitem2);

    let ele2=await browser.$("//p[@class='c-item-name '][contains(.,'Valentine Chocolate Heart Pinata Cake (1 kg)')]")
    cakenameincart =  await ele2.getText()
    console.log(cakenameincart);

    let ele3 = await browser.$("#s-total-val-591969")
    cakepriceincart = await ele3.getText()
    console.log(cakepriceincart);

     
})

xit('comparing the cake price in menu and cart items' , async ()=>{
  if(cakepriceinmenu == cakepriceincart)
    {
     console.log("Both price are same");
     }
     else{
        console.log("Not same");
     }
 
 })

xit('comparing the cake name in menu and cart items' , async ()=>{

    if(cakenameinmenu == cakenameincart)
    {
    console.log("Both name are same");
    }
    else{
        console.log("Not same");
     }
})



})