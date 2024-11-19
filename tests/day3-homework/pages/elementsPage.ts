import { BasePage } from "./basePage";

export class ElementsPage extends BasePage {
    readonly textBoxMenu = this.page.locator('text=Text Box');
    readonly checkBoxMenu = this.page.locator('text=Check Box');
    readonly radioButtonMenu = this.page.locator('text=Radio Button');

    async goToTextBox(){
        await this.textBoxMenu.click();
    }

    async gotoCheckBox(){
        await this.checkBoxMenu.click();
    }
}