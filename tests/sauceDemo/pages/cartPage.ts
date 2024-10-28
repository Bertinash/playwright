import { expect, Page } from '@playwright/test'

export class CartPage {
    readonly page: Page;
    readonly checkOutButton: string;
    readonly removeButton: string;

    constructor(page: Page){
        this.page = page;
        this.checkOutButton = 'button[name="checkout"]';
        this.removeButton = 'button[name="remove-sauce-labs-backpack"]';
    }

    async removeProductFromCart(){
        await this.page.click(this.removeButton);
    }
    async clickOnCheckOut(){
        await this.page.click(this.checkOutButton);
    }
    async isRemoveButtonVisible(): Promise<boolean> {
        return this.page.locator(this.removeButton).isVisible();
      }
    
}