import { test, expect } from '../fixtures/fixtures';
import { generateRandomUser } from '../data/userGenerate';
import { FirstPage } from '../pages/firstPage';
import exp from 'constants';
import { ProductPage } from '../pages/productPage';


test.describe('Testing the e-comm site', () =>{
    let firstPage: FirstPage;
    let productPage: ProductPage;
    
    test.beforeEach(async({page}) =>{
        firstPage = new FirstPage(page);
        await firstPage.navigateToPage();
    });
    test('Crete a new account for a new user', async({createAnAccountPage}) =>{
        const {firstName, lastName, email, password} = generateRandomUser();
        await createAnAccountPage.navigateToCreateAccountPage();
        await createAnAccountPage.fillCreateAccountForm(firstName, lastName, email, password);
        await createAnAccountPage.sumbitCreateAnAccountButton();
        const confirmationMessage = createAnAccountPage.page.locator('text=Thank you for registering with Main Website Store.');
        await expect(confirmationMessage).toBeVisible();
        console.log(`Created email is: ${email}`);

    });
    test('Verify that a product is added', async({productPage}) =>{
        await firstPage.selectAnItem();
        await productPage.selectAndAddAProduct();
        const confirmationMessage = productPage.page.locator('text=You added');
        await expect(confirmationMessage).toBeVisible();
        //const cartItem = productPage.page.locator('div.mini-cart-item');
        //await expect(cartItem).toContainText('Bag');

    })
})