class addDoctorPage
{
    get docsplizdd()
    {
        return $("//label[@for='DoctorSpecialization']")
    }
    get docnametf()
    {
        return $("[name='docname']")
    }
    get docclincadrtf()
    {
        return $("[name='clinicaddress']")
    }
    get docfeetf()
    {
        return $("[name='docfees']")
    }
    get doccontnotf()
    {
        return $("[name='doccontact']")
    }
    get docemailtf()
    {
        return $("#docemail")
    }
    get pwdtf()
    {
        return $("[name='npass']")
    }
    get cnfpwdtf()
    {
        return $("[name='cfpass']")
    }
    get submtbtn()
    {
        return $("#submit")
    }

    async  adddoctaction(specialization,docname,address,fee,mobileno,email,pwd,cnpwd)
    {
        await this.docsplizdd.selectByVisibleText(specialization)
        await this.docnametf.setValue(docname)
        await this.docclincadrtf.setValue(address)
        await this.docfeetf.setValue(fee)
        await this.doccontnotf.setValue(mobileno)
        await this.docemailtf.setValue(email)
        await this.pwdtf.setValue(pwd)
        await this.cnfpwdtf.setValue(cnpwd)
        await this.submtbtn.click()

    }
}

//export default new addDoctorPage()
module.exports=new addDoctorPage()