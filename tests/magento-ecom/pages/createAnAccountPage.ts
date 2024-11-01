import { Page } from "@playwright/test";

export class CreateAnAccountPage {
    readonly page: Page;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly createAnAccount: string;

    constructor(page: Page) {
        this.page = page;
        this.createAnAccount = 'a:has-text("Create an Account")';
        
    }

    async navigateToCreateAccountPage(){
        await this.page.click(this.createAnAccount);
        ;
    }
    async fillCreateAccountForm( firstName: string, lastName: string, email: string, password: string){
        await this.page.fill('#firstname', firstName);
        await this.page.fill('#lastname', lastName);
        await this.page.fill('#email_address', email);
        await this.page.fill('#password', password);
        await this.page.fill('#password-confirmation', password);
  }
    async sumbitCreateAnAccountButton(){
        await this.page.getByRole('button', { name: 'Create an Account' }).click();
    }
    
}