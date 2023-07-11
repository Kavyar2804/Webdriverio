describe('Launch chrome browser', ()=>{

    it('launch browser' , async()=>{

        await browser.url('http://rmgtestingserver/domain/Online_Banking_System')
        await browser.pause(5000)
    })
})