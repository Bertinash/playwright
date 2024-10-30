import { Page } from '@playwright/test'

export class CreateComputerPage {
    readonly page : Page;
    readonly addComputerButton = 'text=Add a new computer';
    readonly nameInput = '#name';
    readonly introducedInput = '#introduced';
    readonly discontinuedInput = '#discontinued';
    readonly companySelect = '#company';
    readonly createButton = 'input[type="submit"]';

   constructor(page: Page){
    this.page = page;
   }
   
   async addNewComputer(name: string, introduced: string, discontinued: string, company: string){
    await this.page.click(this.addComputerButton);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.introducedInput, introduced);
    await this.page.fill(this.discontinuedInput, discontinued);
    await this.page.selectOption(this.companySelect, {label: company });
    await this.page.click(this.createButton);
   }
}