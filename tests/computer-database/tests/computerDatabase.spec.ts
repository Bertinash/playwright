import {expect, test} from '@playwright/test'
import * as fs from 'fs'
import { CreateComputerPage } from '../pages/createComputerPage';
import { MainPage } from '../pages/mainPage';
import { create } from 'domain';
import exp from 'constants';


interface ComputerData {
    name: string;
    introduced: string;
    discontinued: string;
    company: string;
}
const testData = JSON.parse(fs.readFileSync('./tests/computer-database/data/computers.json', 'utf-8'));


test.describe('Computer database testing:', () =>{
    let mainPage: MainPage;
    let createComputerPage: CreateComputerPage;

    test.beforeEach(async ({ page }) =>{
        mainPage = new MainPage(page);
        createComputerPage = new CreateComputerPage(page);
        await mainPage.navigateToPage();
    
    });

    test('Verify the page title', async () =>{
        await mainPage.verifyTitle();
    });

    test('Add a new computer and verifying success message', async ()=> {
        const productName = 'Nintendo Swtich';
        await createComputerPage.addNewComputer(productName,'2017-03-03','2025-06-30', 'Nintendo');
        //const successMessage = await mainPage.getSuccessMessage();
        //await expect(successMessage).toContain(`Done ! Computer ${productName} has`);
        await mainPage.verifySuccesfulMassage(productName);
    });

    test('Search for computers by name and verify result message', async () => {
        const computerName = 'ACE';
        await mainPage.searchComputer(computerName);
        const resultMessage = await mainPage.verifySearchResultMessage();
        console.log(resultMessage);
        expect(resultMessage).toContain('6 computers found');
    });

    testData.forEach(({name, introduced, discontinued, company}) => {
        test(`Add a new computer: ${name}`, async ({page}) =>{
            await createComputerPage.addNewComputer(name, introduced, discontinued, company);
            await mainPage.verifySuccesfulMassage(name);
        })
    })

})