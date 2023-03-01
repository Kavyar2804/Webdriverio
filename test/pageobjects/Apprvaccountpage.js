
class Apprvaccpage
{
    get applicatnumtxtfild()
    {
        return $("[name='application_no']")
    }
    get srchbtn()
    {
        return $("[name='search_application']")
    }
    get aprvacbtn()
    {
        return $("[name='approve_cust']")
    }

    async apprvaccaction(applino)
    {
        await this.applicatnumtxtfild.setValue(applino)
        await this.srchbtn.click()
        await this.aprvacbtn.click()
        
    }
}

module.exports = new Apprvaccpage()