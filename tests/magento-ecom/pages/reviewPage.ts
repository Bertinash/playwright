import { Page } from '@playwright/test'
import locators from '../locators/shippingPage.json'

export class ReviewPage{
    constructor(public page:Page){
        this.page = page;
    }
    async placeOrder(){
        await this.page.click(locators.reviewPage.placeOrderButton);
    }
    async getSuccessMessage(){
        return await this.page.locator(locators.reviewPage.successMessage).innerText();
    }
}