describe('Launch chrome browser', ()=>{

    it('launch browser' , async()=>{

        await browser.url('http://www.google.com')
        await browser.pause(5000)
    })
})