describe('Perform Mouse over' ,()=>{
it('Mouse Hover' , async ()=>{

    await browser.url("https://www.flipkart.com/")
    await browser.maximizeWindow()
    await browser.$("//button[.='✕']").click()
    let title = await browser.getTitle()
    console.log(title);
    expect (browser).toHaveTitleContaining("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
     let ele = await browser.$("//div[@class='InyRMC _3Il5oO']/div/div[.='Home']")
    await ele.waitForDisplayed({timeout:2000})
    await browser.pause(10000)
    await ele.moveTo()
    await browser.pause(10000)
    await browser.$("//a[@class='_6WOcW9 _2-k99T']").click()
    await browser.pause(10000)
})


})