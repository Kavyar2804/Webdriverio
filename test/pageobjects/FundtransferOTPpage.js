
class FndtransfrOTPage
{
    get otpmsg()
    {
        return $(".OTP_msg")
    }
    get otpcodetxtfild()
    {
        return $("[name='otpcode']")
    }
    get otpvrifybtn()
    {
        return $("[name='verify-btn']")
    }

    async otpaction(otp,)
    {
        await (await this.otpcodetxtfild).setValue(otp)
        await (await this.otpvrifybtn).click()

    }


}
module.exports= new FndtransfrOTPage()