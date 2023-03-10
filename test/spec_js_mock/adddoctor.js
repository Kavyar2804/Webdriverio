//import { expect } from "chai"
const { expect } = require("chai")
// import adminloginpage from "../jsmock_pageobject/admin_loginpage.js"
// import admindashboardpage from "../jsmock_pageobject/admin_dashboeard_page.js"
// import adddoctorpage from "../jsmock_pageobject/add_doctor_page.js"
// import hmspage from "../jsmock_pageobject/hms_page.js"
// import doctor_login_page from "../jsmock_pageobject/doctor_login_page.js"
// import doctorhomepage from "../jsmock_pageobject/doctorhomepage.js"
const adminloginpage = require("../jsmock_pageobject/admin_loginpage.js")
const admindashboardpage = require("../jsmock_pageobject/admin_dashboeard_page.js")
const adddoctorpage = require("../jsmock_pageobject/add_doctor_page.js")
const hmspage = require("../jsmock_pageobject/hms_page.js")
const doctor_login_page = require("../jsmock_pageobject/doctor_login_page.js")
const doctorhomepage = require("../jsmock_pageobject/doctorhomepage.js")
describe("As a Admin add new doctor and verify" , ()=>{
    let createduser = 'Purvith'

    it('login as admin', async()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Hospital_Management_System/")
        await browser.pause(5000)
        let hmstitle =await browser.getTitle()
        console.log(hmstitle);
        expect(hmstitle).to.be.equal('Hospital Management System')
        expect(await hmspage.adminlgnbtn.waitForClickable({timeout:2000})).to.be.true
        await hmspage.adminlgnbtn.click()
        let adminlogintitle = await browser.getTitle()
        console.log(adminlogintitle);
        expect (adminlogintitle).to.be.equal('Admin-Login')
        expect (await adminloginpage.loginbtn.waitForClickable({timeout:3000})).to.be.true
        await adminloginpage.adminloginaction('admin','Test@12345') 
        let  adminhmpgtitle = await browser.getTitle()
        console.log(adminhmpgtitle);
        expect(adminhmpgtitle).to.be.equal('Admin  | Dashboard')   
    })

    it('Add doctor',async()=>{

        expect(await admindashboardpage.doctrnavibtn.waitForClickable({timeout:3000})).to.be.true
        await admindashboardpage.doctrnavibtn.click()
        expect(await admindashboardpage.adddctrbtn.waitForClickable({timeout:2000})).to.be.true
        await admindashboardpage.adddctrbtn.click()
        let adddoctortitle = await browser.getTitle()
        console.log(adddoctortitle);
        expect(adddoctortitle).to.be.equal('Admin | Add Doctor')
        expect( await adddoctorpage.submtbtn.waitForClickable({timeout:3000})).to.be.true
        await adddoctorpage.adddoctaction('cardiologist' , 'Purvith' , 'Vijaynagar' , 2000 , 9412537698, 'purvith@gmail.com' , 'purvith@143' ,'purvith@143')
        await browser.isAlertOpen()
        await browser.getAlertText()
        await browser.acceptAlert()
        await admindashboardpage.angledwnbtn.click()
        expect(await admindashboardpag.logoutbtn.waitForClickable({timeout:2000})).to.be.true
        await admindashboardpage.logoutbtn.click()
    })


    it('Login as doctor and check doctor is created' , async ()=>{
        
        let hmstitle =await browser.getTitle()
        console.log(hmstitle);
        expect(hmstitle).to.be.equal('Hospital Management System')
        expect(await hmspage.doclgnbtn.waitForClickable({timeout:2000})).to.be.true
        await hmspage.doclgnbtn.click()
        let doclogintitle = await browser.getTitle()
        expect(doclogintitle).to.be.equal('Doctor Login')
        expect(await doctor_login_page.loginbtn.waitForClickable({timeout:2000})).to.be.true
        doctor_login_page.docloginaction('Purvith', 'purvith@143')
        let dochmtitle = await browser.getTitle()
        expect(dochmtitle).to.be.equal('Doctor  | Dashboard')

    })
    it('validation of user' , async ()=>{

        expect(await doctorhomepage.username.waitForDisplayed({timeout:2000})).to.be.equal
        displayeduser = await doctorhomepage.getText()

        expect(createduser).to.deep.equal(displayeduser)

    })
}) 