describe("Findelemnts" , ()=>{

    it("Icc rankings" , async ()=>{

        await browser.url("https://www.icc-cricket.com/rankings/womens/team-rankings/odi")
        await browser.maximizeWindow()
        let teams = await browser.$$("//table//span[@class='u-hide-phablet']")
        tcount = await teams.length
        console.log(tcount);
        await teams.map((ele)=>{
           return ele.getText()
        })

        // await teams.forEach((element)=>{
        //     console.log(element.getText());
        // })






        




    })

})