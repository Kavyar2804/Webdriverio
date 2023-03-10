// import {expect} from "chai";
//import Bankinghomepage from "./pageobjects"
//var expect = require("chai").expect

 const { expect } = require("chai")
const Bankinghomepage = require("../pageobjects/BankingHomepage")
 const Openaccountpage = require("../pageobjects/Openaccountpage")
 const Oarecnfrmpage = require("../pageobjects/OpenaccountReconfirmationPage")

describe('Apply for account opening through online' , ()=>{

it('Fill Open account form smoke' , async ()=>{
await browser.url("http://testingserver/domain/Online_Banking_System/")
await browser.maximizeWindow()
title1 = await browser.getTitle()
console.log(title1);
//expect(browser).toHaveTitleContaining('Online Banking System')
expect(title1).to.equal('Online Banking System')
await Bankinghomepage.openacount()
await Openaccountpage.dobtxtfild.waitForClickable({timeout:2000})
await Openaccountpage.dobaction()
await browser.keys('2')
await browser.keys('8')
await browser.keys('4')
await browser.keys('ArrowRight')
await browser.keys('1')
await browser.keys('9')
await browser.keys('9')
await browser.keys('3')
await Openaccountpage.Openaccountaction('Kavya', 9876543210,'kavyar@gmail.com', 08024455667,'abc1234',123456789,'Moodalapalya','Katriguppe',560087,'Bangalore', 'XYZ', 889977456130 , 'Female', 'Texas City','Texas', 'Saving')
expect (await Openaccountpage.OAsubmitbtn.waitForClickable({timeout:2000})).to.be.true
await Openaccountpage.Openaccounsubmit()
expect (await Oarecnfrmpage.OAResubmitbtn.waitForClickable({timeout:3000})).to.be.true
let title = await browser.getTitle()
console.log(title);
expect(title).to.include('Confirm')
await Oarecnfrmpage.recnfrmaction()
})

it('Capture Application no' , async ()=>{

  //await browser.isAlertOpen()
  let txt = await browser.getAlertText()
  let txt1 = txt.split("")
  console.log(txt1);
  let txt2 = txt1.filter((val)=>{
    return val>=0 && val<=9
  })
  console.log(txt2);
  let applino = txt2.join("").trim()
  console.log(`The application no is ${applino}`);
  await browser.acceptAlert()
})

})
