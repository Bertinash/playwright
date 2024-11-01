import { Page } from "@playwright/test";

export class FirstPage{
    readonly page: Page;
    readonly hoverMenu: string;
    readonly itemMenu: string;


    constructor(page: Page){
        this.page = page;
        this.hoverMenu = 'a:has-text("Gear")';
        this.itemMenu = 'a:has-text("Bags")';

    }
    async navigateToPage(){
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }
    async selectAnItem(){
        await this.page.hover(this.hoverMenu);
        await this.page.click(this.itemMenu);
    }
    
}