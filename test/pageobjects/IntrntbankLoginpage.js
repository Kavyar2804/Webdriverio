
class IntrntbnkloginPage
{
    get custmridtxtfild()
    {
        return $("[name='customer_id']")
    }
    get pwdtxtfild()
    {
        return $("[name='password']")
    }
    get lgnbtn()
    {
        return $("[name='login-btn']")
    }

    async Intrloginaction(cusid, pwd )
    {
        await this.custmridtxtfild.setValue(cusid)
        await this.pwdtxtfild.setValue(pwd)
        await this.lgnbtn.click()
    }
}
module.exports=new IntrntbnkloginPage()