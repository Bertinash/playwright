import {Page} from '@playwright/test'

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
}