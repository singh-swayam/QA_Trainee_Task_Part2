import { test, expect } from '@playwright/test';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';

test.describe('Browser Windows Tests', () => {

    test('TC_001 Verify New Tab button opens a new tab', async ({ page, context }) => {

        const browserWindowsPage =
            new BrowserWindowsPage(page);

        await browserWindowsPage.goto();

        const [newTab] = await Promise.all([
            context.waitForEvent('page'),
            browserWindowsPage.newTabButton.click()
        ]);

        await newTab.waitForLoadState();

        expect(newTab).toBeTruthy();
    });

    test('TC_002 Verify content of newly opened tab', async ({ page, context }) => {

        const browserWindowsPage =
            new BrowserWindowsPage(page);

        await browserWindowsPage.goto();

        const [newTab] = await Promise.all([
            context.waitForEvent('page'),
            browserWindowsPage.newTabButton.click()
        ]);

        await newTab.waitForLoadState();

        await expect(
            newTab.locator('#sampleHeading')
        ).toHaveText('This is a sample page');
    });

    test('TC_003 Close child tab and switch back to parent', async ({ page, context }) => {

        const browserWindowsPage =
            new BrowserWindowsPage(page);

        await browserWindowsPage.goto();

        const parentPage = page;

        const [newTab] = await Promise.all([
            context.waitForEvent('page'),
            browserWindowsPage.newTabButton.click()
        ]);

        await newTab.waitForLoadState();

        await newTab.close();

        await expect(parentPage).toHaveURL(
            'https://demoqa.com/browser-windows'
        );
    });

    test('TC_004 Verify New Window Message functionality', async ({ page, context }) => {

        const browserWindowsPage =
            new BrowserWindowsPage(page);

        await browserWindowsPage.goto();

        const [messageWindow] = await Promise.all([
            context.waitForEvent('page'),
            browserWindowsPage.newWindowMessageButton.click()
        ]);

        await messageWindow.waitForLoadState();

        const bodyText =
            await messageWindow.locator('body').textContent();

        expect(bodyText).toContain(
            'Knowledge increases by sharing but not by saving'
        );
    });

});