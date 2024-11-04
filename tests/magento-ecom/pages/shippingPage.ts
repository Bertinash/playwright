import { Page } from '@playwright/test'
import locators from '../locators/shippingPage.json'
export class ShippingPage{
    readonly page: Page;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly streetName: string;
    readonly country: string;
    readonly city: string;
    readonly state: string;
    readonly zipCode: string;
    readonly phoneNumber: string;

    constructor(page:Page){
        this.page = page;

    }

    async inputShippingDetails(email: string,firstName: string, lastName: string, streetName: string, country: string, city: string, state: string, zipCode: string, phoneNumber: string){
        await this.page.waitForTimeout(2000);
        await this.page.fill(locators.shippingPage.email, email);
        await this.page.fill(locators.shippingPage.firstName, firstName);
        await this.page.fill(locators.shippingPage.lastName, lastName);
        await this.page.fill(locators.shippingPage.streetName, streetName);
        await this.page.fill(locators.shippingPage.city, city);
        //await this.page.fill(locators.shippingPage.countryDropdown, country);
        await this.page.fill(locators.shippingPage.zipCode, zipCode);
        await this.page.fill(locators.shippingPage.phoneNumber, phoneNumber);
    }
    async proceedtoReview(){
        await this.page.click(locators.shippingPage.nextButton);
    }
}