//const Bnkhomepage = require("./BankingHomepage")
//("../pageobjects/BankingHomepage")

class Openaccountpage
{
get nametxtfild()
{
    return $("aria/Name")
}
get mblnotxtfild()
{
    return $("[name='mobile']")
}
get emailidtxtfild()
{
    return $("[name='email']")
}
get lndlinenotxtfild()
{
    return $("aria/Landline no")
}
get pannotxtfild()
{
    return $("[name='pan_no']")
}
get ctznnofild()
{
    return $("[name='citizenship']")
}
get homeadrtxtfild()
{
    return $("[name='homeaddrs']")
}
get ofcadrtxtfild()
{
    return $("[name='officeaddrs']")
}
get pincdtxtfild()
{
    return $("[name='pin']")
}
get areatxtfild()
{
    return $("[name='arealoc']")
}
get nomintxtfild()
{
    return $("[name='nominee_name']")
}
get nmnaccno()
{
    return $("[name='nominee_ac_no']")
}
get gndrDD()
{
    return $("[name='gender']")
}
get stateDD()
{
    return $("[name='state']")
}
get  cityDD()
{
    return $("[name='city']")
}
get acctyDD()
{
    return  $("[name='acctype']")
}
get dobtxtfild()
{
return $("[name='dob']")
}
get OAsubmitbtn()
{
    return $("[name='submit']")
}

async Openaccountaction(name, mblno, email, landline, panno, ctznno, homeadr, ofcadr, pinno, area, nmname, nmaccno, gender, city, state, acctype )
{
    await this.nametxtfild.setValue(name)
    await this.mblnotxtfild.setValue(mblno)
    await this.emailidtxtfild.setValue(email)
    await this.lndlinenotxtfild.setValue(landline)
    await this.pannotxtfild.setValue(panno)
    await this.ctznnofild.setValue(ctznno)
    await this.homeadrtxtfild.setValue(homeadr)
    await this.ofcadrtxtfild.setValue(ofcadr)
    await this.pincdtxtfild.setValue(pinno)
    await this.areatxtfild.setValue(area)
    await this.nomintxtfild.setValue(nmname)
    await this.nmnaccno.setValue(nmaccno)
    await this.gndrDD.selectByVisibleText(gender)
    await this.cityDD.selectByVisibleText(city)
    await this.stateDD.selectByVisibleText(state)
    await this.acctyDD.selectByVisibleText(acctype)
}

async dobaction()
{
    await this.dobtxtfild.click() 
}

async Openaccounsubmit()
{
    await this.OAsubmitbtn.click()
}
}


module.exports = new Openaccountpage()