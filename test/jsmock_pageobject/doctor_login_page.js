class Doctorloginpage
{
    get usrnametf()
    {
       return $("[name:'username']")
    }
    get pwdtf()
    {
        return $("[name:'password']")
    }

    get loginbtn()
    {
        return $("[name:'submit']")
    }

    async docloginaction(username,pwd)
    {
        await this.usrnametf.setValue(username)
        await this.pwdtf.setValue(pwd)
        await this.loginbtn.click()
    }
}

//export default new Doctorloginpage()
module.exports=new  Doctorloginpage()