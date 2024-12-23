import { Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: string;
    readonly passwordInput: string;
    readonly loginButton: string;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }
    async navigateToLogin () {
        await this.page.goto('/');
    }
    async login(username: string, password: string){
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}