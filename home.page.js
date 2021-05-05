const Page = require('./page');

class HomePage extends Page {
    get singIn () { return $("//a[contains(text(),'Sign in')]") }
    
    async open () {
        return super.open()
    }

    async clickSingIn() {
        await (await this.singIn).click()
        //await browser.pause(5000)
    }
}

module.exports = new HomePage();
