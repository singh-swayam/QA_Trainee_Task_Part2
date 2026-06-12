import { test as base } from '@playwright/test';

import { BrowserWindowsPage }
from '../pages/BrowserWindowsPage';

import { BookStorePage }
from '../pages/BookStorePage';

import { CommonUtils }
from '../utils/commonUtils';

type MyFixtures = {

    browserWindowsPage: BrowserWindowsPage;
    bookStorePage: BookStorePage;
    commonUtils: CommonUtils;
};

export const test =
    base.extend<MyFixtures>({

        browserWindowsPage:
            async ({ page }, use) => {

                await use(new BrowserWindowsPage(page));
            },

        bookStorePage:
            async ({ page }, use) => {

                await use(new BookStorePage(page));
            },

        commonUtils:
            async ({}, use) => {

                await use(new CommonUtils());
            }
    });

export { expect } from '@playwright/test';