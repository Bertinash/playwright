import {test as base, Page} from '@playwright/test'
import { CreateAnAccountPage } from '../pages/createAnAccountPage'
import { ProductPage } from '../pages/productPage';
import { FirstPage } from '../pages/firstPage';
export {expect} from '@playwright/test';
type Fixtures = {
    createAnAccountPage: CreateAnAccountPage;
    productPage: ProductPage;
    firstPage: FirstPage;
};
export const test= base.extend<Fixtures>({
    createAnAccountPage: async ({page}, use) =>{
        const createAnAccountPage = new CreateAnAccountPage(page);
        await use(createAnAccountPage);
    },
    productPage: async ({page}, use) =>{
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    firstPage: async ({page}, use) =>{
        await use (new FirstPage(page));
    }
})