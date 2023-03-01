const bankhmpage = require("./BankingHomepage")

class Intrntrgistrpage
{
    get acchldrnametxtfild()
    {
        return $("[name='holder_name']")
    }
    get accnotxtfild()
    {
        return $("[name='accnum']")
    }
    get dbtcrdnotxtfild()
    {
        return $("[name='dbtcard']")
    }
    get dbtcrdpintxtfild()
    {
        return $("[name='dbtpin']")
    }
    get mbilnotxtfild()
    {
        return $("[name='mobile']")
    }
    get pannotxtfild()
    {
        return $("[name='pan_no']")
    }
    get dobtxtfild()
    {
        return $("[name='dob']")
    } 
    get lastranctxtfild()
    {
        return $("[name='last_trans']")
    }
    get pWdtxtfild()
    {
        return $("[name='password']")
    }
    get pwdcnfrmtxtfild()
    {
        return $("[name='cnfrm_password']")
    }
    get Intregsubmtbtn()
    {
        return $("[name='submit']")
    }

    async Intrntregisteraction(accname, accno, dbtcrdno, dbtpin, mblno, panno, lasttrans, pwd, cnfrmpwd )
    {
        await this.acchldrnametxtfild.setValue(accname)
        await this.accnotxtfild.setValue(accno)
        await this.dbtcrdnotxtfild.setValue(dbtcrdno)
        await this.dbtcrdpintxtfild.setValue(dbtpin)
        await this.mbilnotxtfild.setValue(mblno)
        await this.pannotxtfild.setValue(panno)
        await this.lastranctxtfild.setValue(lasttrans)
        await this.pWdtxtfild.setValue(pwd)
        await this.pwdcnfrmtxtfild.setValue(cnfrmpwd)
        await this.dobtxtfild.click()
    }

    async IRsubmit()
    {
        await this.Intregsubmtbtn.click()
    }
    
}

module.exports = new Intrntrgistrpage()