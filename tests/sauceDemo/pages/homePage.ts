import { Page } from '@playwright/test'

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: string;
    readonly cartIcon: string;
    readonly cartNotificationBadge: string;

    constructor(page: Page){
        this.page = page;
        this.addToCartButton = 'button[name="add-to-cart-sauce-labs-backpack"]';
        this.cartIcon = '.shopping_cart_link';
        this.cartNotificationBadge = '.shopping_cart_badge';
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
    async getCartItemCount(): Promise<number> {
        const badge = await this.page.locator(this.cartNotificationBadge);
        if(await badge.isVisible()){
            const countTet = await badge.innerText();
            return parseInt(countTet, 10)
        }
        return 0;
    }
}