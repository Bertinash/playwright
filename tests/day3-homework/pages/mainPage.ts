import { BasePage } from './basePage';

export class MainPage extends BasePage {
    readonly elementPage = this.page.locator('text=Elements');
    readonly formsPage = this.page.locator('text=Forms');
    readonly alertsPage = this.page.locator('text=Alerts, Frame & Windows');

    async clickOnElementPage() {
        await this.elementPage.click();
    }
    
    async clickOnFromsPage() {
        await this.formsPage.click();
    }
}