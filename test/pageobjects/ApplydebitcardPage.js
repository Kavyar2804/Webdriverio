const openaccountpage = require("./Openaccountpage")

class Applydebitcardpage
{
    get acchldnmetxtfild()
    {
        return $("[name='holder_name']")
    }
    get pantxtfild()
    {
        return $("[name='pan']")
    }
    get mobilnumtxtfild()
    {
        return $("[name='mob']")
    }
    get accnotxtfild()
    {
        return $("[name='acc_no']")
    }
    get dobtxtfild()
    {
        return $("[name='dob']")
    }
    get APsubmitbtn()
    {
        return $("//input[@type='submit']")
    }

    async apllydebitcardaction(acname, panno, mobno,accno )
    {
        await this.acchldnmetxtfild.setValue(acname)
        await this.pantxtfild.setValue(panno)
        await this.mobilnumtxtfild.setValue(mobno)
        await this.accnotxtfild.setValue(accno)
        await this.dobtxtfild.click()
    }

    async Apdbsubmtbtn()
    {
        await this.APsubmitbtn.click()
    }

}

module.exports = new Applydebitcardpage()