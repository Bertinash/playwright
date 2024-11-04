import {test as base, Page} from '@playwright/test'
import { CreateAnAccountPage } from '../pages/createAnAccountPage'
import { ProductPage } from '../pages/productPage';
import { FirstPage } from '../pages/firstPage';
import { ShippingPage } from '../pages/shippingPage';
import { ReviewPage } from '../pages/reviewPage';
export {expect} from '@playwright/test';

type Fixtures = {
    createAnAccountPage: CreateAnAccountPage;
    productPage: ProductPage;
    firstPage: FirstPage;
    shippingPage: ShippingPage;
    reviewPage: ReviewPage;
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
    },
    shippingPage: async ({page}, use) =>{
        await use (new ShippingPage(page));
    },
    reviewPage: async ({page}, use) =>{
        await use ( new ReviewPage(page));
    }
})