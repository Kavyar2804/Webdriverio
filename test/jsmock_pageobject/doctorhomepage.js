class doctorhomepage
{
    get username()
    {
        return ("//span[@class='username']")
    }
}

//export default new doctorhomepage()
module.exports = new doctorhomepage()