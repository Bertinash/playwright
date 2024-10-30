import { expect, Page } from '@playwright/test';

export class MainPage{
    readonly page: Page;
    readonly title = 'Computers database';
    readonly addComputerButton = 'text=Add a new computer';
    readonly searchBox = '#searchbox';
    readonly searchButton = '#searchsubmit';
    readonly alertMessage = '.alert-message.warning';
    readonly resultMessage = 'h1';

    constructor(page: Page){
        this.page = page;
    }
    async navigateToPage(){
        await this.page.goto('https://computer-database.gatling.io/computers');
    }

    async verifyTitle(){
        const titleOfPage = await this.page.title();
        expect(titleOfPage).toBe(this.title);
    }
    async verifySuccesfulMassage(name: string){
        const successMessage = await this.page.locator(this.alertMessage).innerText();
        expect(successMessage).toContain(`Done ! Computer ${name} has been created`);
    }
    async searchComputer(name: string){
        await this.page.fill(this.searchBox, name);
        await this.page.click(this.searchButton);
    }
    async verifySearchResultMessage() {
        const resultMessageElement = this.page.locator('h1:has-text("computers found")');
        const resultMessage = await resultMessageElement.innerText();
        return resultMessage
    }
    async getSuccessMessage() {
        const successMessageElement = this.page.locator('h1:has-text(`Computer`)');
        const successMessage = await successMessageElement.innerText(); 
        return successMessage
    }
}