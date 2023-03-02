
class CustomerhomePage
{

    get homebtn()
    {
        return $("[name='home']")
    }
    get logoutbtn()
    {
        return $("[name='logout_btn']")
    }
    get myaccbtn()
    {
        return $("//a[@href='customer_profile_myacc.php']/li[1]")   
    }
    get myprflbtn()
    {
        return $("//a[@href='customer_profile_myprofile.php']/li[1]")
    }
    get chngpedbtn()
    {
        return $("//a[@href='customer_pass_change.ph']/li[1]")
    }
    get fndtrnsrbtn()
    {
        return $("//a[@href='fund_transfer.php']/li[1]")
    }
    get statmntbtn()
    {
        return $("//a[@href='cust_statement.php']/li[1]")
    }
    
        async fndtrnsfraction()
    {
        await this.fndtrnsrbtn.click()
    }
    async statmnaction()
    {
        await this.statmntbtn.click()
    }
    async homaction()
    {
        await this.homebtn.click()
    }
    async logoutaction()
    {
        await this.logoutbtn.click()
    }

}
module.exports=new CustomerhomePage()