class BankHomePage
{
    get HMopenaccbtn()
    {
        return $("li=Open Account")
    }

    get HMapplydbtcrdbtn()
    {
        return $("li=Apply Debit Card")
    }
    get HMinterntbnkbtn()
    {
        return $(".ebanking")
    }
    get HMintrntloginbtn()
    {
     return $("//a[@href='customer_login.php']/li[1]")   
    }
    get HMintrntregbtn()
    {
        return $("=Register")
    }
    get HMfundtrnsfrbtn()
    {
        return $("//a[@href='fund_transfer.php']")
    }

    get HMstafflgnlink()
    {
        return $("//a[@href='staff_login.php']")
    }
    get Hmhomelink()
    {
        return $("//a[@href='index.php'][contains(.,'Home')]")
    }

    async openacount()
    {
        await this.HMopenaccbtn.click()
    }
    async applydbtcrd()
    {
        await this.HMapplydbtcrdbtn.click()
    }

    async intrntbnkreg()
    {
        await this.HMintrntregbtn.click()
    }

    async intrnbnklogin()
    {
        await this.HMintrntloginbtn.click()
    }
    
    async homelink()
    {
        await this.Hmhomelink.click()
    }
    async staffloginlink()
    {
        await this.HMstafflgnlink.click()
    }

}

module.exports = new BankHomePage()
//export default new BankHomePage()
