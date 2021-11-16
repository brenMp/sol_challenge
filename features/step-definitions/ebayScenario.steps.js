const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require('../pageobjects/ebayHome.page');

const pages = {
    login: homePage
}

Given(/^I am on Home page$/, async () => {
    //await pages[page].open()
    await homePage.goToUrl()
    await browser.pause(5000);
});

When(/^I search for a (.*) product$/, async (product) => {
    await homePage.inputProduct(product);
    await homePage.clickOnSearchBtn();
});

Then(/^I wait for the search result to be displayed$/, async () => {
    let result = await homePage.isResultDisplayed();
    expect(result).toHaveText('resultados');
});

Then(/^I print on console the number of product (.*) displayed as result of the search$/, async (product) => {
    let result = await homePage.getResult();
    console.log (`The search result for the ${product} is: ${result}` ) 
});