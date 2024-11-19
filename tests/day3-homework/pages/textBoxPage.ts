import { BasePage } from "./basePage";

export class TextBoxPage extends BasePage{
    readonly fullnameBox = this.page.locator('#userName');
    readonly emailBox = this.page.locator('#userEmail');

    async writeNameInTextBox(fullName: string){
        await this.fullnameBox.fill(fullName);
    }

    async writeEmailInBox(email: string){
        await this.emailBox.fill(email);
    }
    async getFullNameValue(): Promise<string> {
        return this.fullnameBox.inputValue();
    }
}
