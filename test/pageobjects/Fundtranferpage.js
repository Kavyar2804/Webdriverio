class Fundtransferpage
{
    get addbnfibtn()
    {
        return $("[name='add_beneficiary']")
    }
    get deletbnfibtn()
    {
        return $("[name='delete_beneficiary']")
    }
    get viwbenfibtn()
    {
        return $("[name='view_beneficiary']")
    }
    get selectbnfidd()
    {
        return $("[name='beneficiary']")
    }
    get amnttxtfild()
    {
        return $("[name='trnsf_amount']")
    }
    get rmrktxtfild()
    {
        return $("[name='trnsf_remark']")
    }
    get sndbtn()
    {
        return $("[name='fnd_trns_btn']")
    }

    async fundtrnsfraction(benfi, amount, rmrk)
    {
        await (await this.selectbnfidd).selectByVisibleText(benfi)
        await (await this.amnttxtfild).setValue(amount)
        await (await this.rmrktxtfild).setValue(rmrk)
        await this.sndbtn.click()
    }
    async addbenfiaction()
    {
        await (await this.addbnfibtn).click()
    }
    async deletebenfiaction()
    {
        await (await this.deletbnfibtn).click()
    }
    async viwbenfiaction()
    {
        await (await this.viwbenfibtn).click()
    }
}
module.exports=new Fundtransferpage()
