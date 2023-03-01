
class CreditCustomerpage
{
    get customeracnotxtfild()
    {
        return $("[name='customer_account_no']")
    }
    get amounttxtfild()
    {
        return $("[name='credit_amount']")
    }
    get crdtbtn()
    {
        return $("[name='credit_btn']")
    }

    async crditcusaction(accno, amount)
    {
        await this.customeracnotxtfild.setValue(accno)
        await this.amounttxtfild.setValue(amount)
        await this.crdtbtn.click()
    }

}

module.exports = new CreditCustomerpage()