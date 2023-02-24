describe('To do Scroll action' , ()=>{

it("Food oredering app" , async ()=>{

    await browser.url("http://testingserver/domain/Online_Food_Ordering_System/")
    await browser.maximizeWindow()
    await browser.scroll(0 , 500)
    //await browser.touchScroll(100,500)
    await browser.pause(3000)
    let ele = await browser.$("//a[.='Chicken Madeira']")
    await ele.scrollIntoView()
   let ele2 =  await browser.$("//h5[.='Addition informations']")
   



})


})