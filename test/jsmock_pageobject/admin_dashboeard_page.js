class admindashboardpage
{
    get doctrnavibtn()
    {
        return $("//div[@class='item-content']//span[contains(.,' Doctors ')]")
    }
    get adddctrbtn()
    {
        return $("//ul[@class='sub-menu']//span[contains(.,' Add')]")
    }
    get angledwnbtn()
    {
        return $("//i[@class='ti-angle-down']")
    }
    get logoutbtn()
    {
        return $("//a[contains(.,'Log Out')]")
    }
}

//export default new admindashboardpage()
module.exports = new admindashboardpage()