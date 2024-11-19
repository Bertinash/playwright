import {Page} from '@playwright/test'

export class BasePage {
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async navigateToPage(url : string){
        await this.page.goto(url);
    }
    async getPageTitle(): Promise<string> {
        return this.page.title();
    }
}