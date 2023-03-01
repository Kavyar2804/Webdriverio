
class StaffHomePage
{
    get viwactvcustmrbtn()
    {
        return $("[name='viewdet']")
    }
    get viwcustaccnobtn()
    {
        return $("[name='view_cust_by_ac']")
    }
    get apprvaccbtn()
    {
        return $("[name='apprvac']")
    }
    get deletcusbtn()
    {
        return $("[name='del_cust']")
    }
    get crdtcustbtn()
    {
        return $("[name='credit_cust_ac']")
    }
    get hombtn()
    {
        return $("[name='home']")
    }
    get logoutbtn()
    {
        return $("[name='logout_btn']")
    }

    async apprvcusaction()
    {
        await this.apprvaccbtn.click()
    }
    async logoutaction()
    {
        await this.logoutbtn.click()
        
    }
    async crdtcustaction()
    {
        await this.crdtcustbtn.click()
    }
}

module.exports=new StaffHomePage()