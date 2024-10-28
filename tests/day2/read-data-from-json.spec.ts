import { test, expect } from '@playwright/test';
import * as fs from 'fs';
const data1 = JSON.parse(fs.readFileSync('../playwright-project/tests/day2/data/single-user.json', 'utf-8')).login;
import { SaucedemoPage } from './saucedemo-page';

test('test', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill(data1.username);
    await page.locator('[data-test="password"]').fill(data1.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText(data1.title);
  });

  test('test with page object', async ({ page }) => {
    const saucedemoaucedemoPage = new SaucedemoPage(page);
    await saucedemoaucedemoPage.goto();
    await saucedemoaucedemoPage.typeUsername(data1.username);
    await saucedemoaucedemoPage.typePassword(data1.password);
    await saucedemoaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
  });

