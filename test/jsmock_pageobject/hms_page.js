class Hmspage
{
    get adminlgnbtn()
    {
        return $("//a[@href='hms/admin']")
    }
    get doclgnbtn()
    {
        return $("//a[@href='hms/doctor/']")
    }

}

//export default new Hmspage()
module.exports = new Hmspage()