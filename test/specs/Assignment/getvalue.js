describe("Use get value option" , ()=>{


it("Vtiger" , async ()=>{

await browser.url("http://testingserver:8888/index.php?action=Login&module=Users")
await browser.maximizeWindow()
await browser.$("//input[@type='text']").setValue("admin")
await browser.$("//input[@type='password']").setValue("admin")
let ele = await browser.$("#submitButton")
let val =  await ele.getValue()
console.log(val);
await ele.click()


})


})