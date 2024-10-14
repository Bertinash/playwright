import { test, expect } from '@playwright/test';
test.describe("Test Suite for Update User tests", ()=>{

    test.beforeEach("Navigate to Login", async({page})=>{
        await page.goto('/');
    });

    test.describe("Test Suite for Update username tests", ()=>{
        test('update username with valid username', async ({ page }) => {

        });
        test('update username with invalid username', async ({ page }) => {

        });

        test('update username with empty username', async ({ page }) => {

        });

    });

    test.describe("Test Suite for Update password tests", ()=>{
        test('update password with allowed', async ({ page }) => {

        });

    });

    test.afterEach("tear down for our tests", async()=>{

    });

});