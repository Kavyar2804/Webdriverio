
class Addbenficiarypage
{

    get bnfcrynmtxtfild()
    {
        return $("[name='beneficiary_name']")
    }
    get bnrcryacnotxtfild()
    {
        return $("[name='beneficiary_acno']")
    }

    get ifscodetxtfild()
    {
    return $("[name='Ifsc_code']")
    }
    get acctyodd()
    {
        return $("[name='beneficiary_acc_type']")
    }
    get addbtn()
    {
        return $("[name='add_beneficiary_btn']")
    }

    async addbenfiaction(name,accno,ifsc, actype)
    {
        await this.bnfcrynmtxtfild.setValue(name)
        await this.bnrcryacnotxtfild.setValue(accno)
        await this.ifscodetxtfild.setValue(ifsc)
        await this.acctyodd.selectByVisibleText(actype)
        await this.addbtn.click()
    }
}

module.exports=new Addbenficiarypage()