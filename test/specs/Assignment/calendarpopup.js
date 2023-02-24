describe("Handle calender popup" , ()=>{
it('Redus Calender popup' , async()=>{

    await browser.url("https://www.redbus.in/")
    await browser.maximizeWindow()
    let title = await browser.getTitle()
    console.log(title);
    expect(browser).toHaveTitleContaining('Book Bus Travels, AC Volvo Bus, rPool & Bus Hire - redBus India')
    await browser.$("#src").setValue('Bangalore')
    await browser.$("//ul[@class='autoFill homeSearch']//li[@data-id='122'][contains(.,'Bangalore')]").click()
    await browser.$("#dest").setValue('Mumbai')
    await browser.$("//ul[@class='autoFill homeSearch']//li[@data-id='462'][contains(.,'Mumbai')]").click()
    await browser.$("#onward_cal").click()
    await browser.$("//tbody//td[@class='next']").click()
    await browser.$("//tbody//tr//td[contains(. ,'11')]").click()
    await browser.$("#search_btn").click()
    await browser.pause(10000)


})


})