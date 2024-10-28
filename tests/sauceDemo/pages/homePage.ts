import { Page } from '@playwright/test'

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: string;
    readonly cartIcon: string;

    constructor(page: Page){
        this.page = page;
        this.addToCartButton = 'button[name="add-to-cart-sauce-labs-backpack"]';
        this.cartIcon = '.shopping_cart_link';
    }

    async addItemToCart(){
        await this.page.click(this.addToCartButton)
    }
    async navigateToCart() {
        await this.page.click(this.cartIcon);
    }
    async isCartVisible(): Promise<boolean> {
        return this.page.isVisible(this.cartIcon);
    }
}