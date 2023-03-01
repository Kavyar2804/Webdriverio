
class OAreconfirmpage
{
    get OAResubmitbtn()
{
    return $("[name='cnfrm-submit']")
}

async recnfrmaction()
{
 await this.OAResubmitbtn.click()   
}
}

module.exports = new OAreconfirmpage()