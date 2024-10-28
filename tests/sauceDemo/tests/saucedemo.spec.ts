import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

import * as fs from 'fs';
import { CartPage } from '../pages/cartPage';

const testData = JSON.parse(fs.readFileSync('./tests/sauceDemo/data/userData.json', 'utf8'));


test.describe('SauceDemo basic automation test with data', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        await loginPage.navigateToLogin();

    })

    test('Login with valid credentials', async ({ page }) => {
        const {validUsername, validPassword} = testData.loginData;
        await loginPage.login(validUsername, validPassword);
        expect(await homePage.isCartVisible()).toBeTruthy();
    });
    test('Login with invalid credentials', async ({ page }) => {
        const { lockedUsername, lockedPassword } = testData.loginData;
        await loginPage.login(lockedUsername, lockedPassword);
        const errorMessage = await page.locator('.error-message-container').innerText();
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
      });
    
      test('Add product to cart', async ({ page }) => {
        const { validUsername, validPassword } = testData.loginData;
        await loginPage.login(validUsername, validPassword);
        await homePage.addItemToCart();
        await homePage.navigateToCart();
        const cartUrl = page.url();
        expect(cartUrl).toContain('cart.html');
      });

      test('Verify that there is a count notification', async({ page, browser }) =>{
        const {validUsername,validPassword} = testData.loginData;
        await loginPage.login(validUsername, validPassword);
        await homePage.addItemToCart();
        const itemCount = await homePage.getCartItemCount();
        expect(itemCount).toBeGreaterThanOrEqual(1);
      });

      test('Verify that product is removed from cart', async ({page}) => {
        const {validUsername,validPassword} = testData.loginData;
        await loginPage.login(validUsername, validPassword);
        await homePage.addItemToCart();
        await homePage.navigateToCart();
        await cartPage.removeProductFromCart();
        const isRemoveButtonVisible = await cartPage.isRemoveButtonVisible();
        expect(isRemoveButtonVisible).toBeFalsy();
      });
})
