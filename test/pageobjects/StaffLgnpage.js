
class Stafflgnpage
{
    get stfidtxtfild()
    {
        return $("[name='staff_id']")
    }
    get pwdtxtfild()
    {
        return $("[name='password']")
    }
    get lgnbtn()
    {
        return $("[name='staff_login-btn']")
    }

    async stflgnaction(staffid, pwd)
    {
        await this.stfidtxtfild.setValue(staffid)
        await this.pwdtxtfild.setValue(pwd)
        await this.lgnbtn.click()
    }

}

module.exports=new Stafflgnpage()