import {Page} from '@playwright/test'
import locators from '../locators/homePage.json'

export class ProductPage{
    readonly page: Page;
    readonly productItem: string;
    readonly addToCartButton: string;

    constructor(page: Page){
        this.page = page;
        this.productItem = 'a.product-item-link';
        this.addToCartButton = 'button:has-text("Add to Cart")';
    }

    async selectAndAddAProduct() {
        await this.page.click(this.productItem);
        await this.page.click(this.addToCartButton);
    }
    async openCartAfterAddingProduct(){
        await this.page.getByRole('link', { name: ' My Cart' }).click();
        await this.page.getByRole('link', { name: 'View and Edit Cart' }).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    }
}