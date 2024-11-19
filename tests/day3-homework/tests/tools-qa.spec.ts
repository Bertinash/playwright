import {expect, test} from '@playwright/test'
import { MainPage } from '../pages/mainPage'
import { ElementsPage } from '../pages/elementsPage';
import { TextBoxPage } from '../pages/textBoxPage';
import exp from 'constants';

test.describe('Tools QA site testing', () =>{
    test('Navigate to Text Box and write name', async ({page}) => {
        const mainPage = new MainPage(page);
        const elemnetsPage = new ElementsPage(page);
        


        await mainPage.navigateToPage('https://demoqa.com');
        await mainPage.clickOnElementPage();
        await elemnetsPage.goToTextBox();
        expect(page.url()).toContain('/text-box');
        
    });
    test("Verify that the full name was written in the text box", async ({page}) => {
        const textBoxPage = new TextBoxPage(page);

        await textBoxPage.navigateToPage('https://demoqa.com/text-box');
        const fullName = 'Shandulovski Kiril';
        await textBoxPage.writeNameInTextBox(fullName);
        const enteredValue = await textBoxPage.getFullNameValue();
        expect(enteredValue).toBe(fullName);
    })

})