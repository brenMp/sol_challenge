class HomePage {

    get searchBox() { return $("#gh-ac") }
    get searchBtn() { return $("#gh-btn")}
    get result() { return $(".srp-controls__count-heading")}
   
    async inputProduct(product){
        await this.searchBox.waitForDisplayed();
        //await this.searchBox.click();
        return await this.searchBox.setValue(product);
    }

    async clickOnSearchBtn(){
        await this.searchBtn.waitForDisplayed();
        return await this.searchBtn.click();
    }

    async isResultDisplayed(){
        await this.result.waitForDisplayed();
        let texto = await this.result.getText();
        return texto;
    }

    async getResult(){
        let result = await this.isResultDisplayed();
        let resultArray = result.split(" ")
        console.log(resultArray);
        let prueba = resultArray[0];
        return prueba;
    }

    async goToUrl(){
        await browser.url("https://www.ebay.com/")
    }

}

module.exports = new HomePage();