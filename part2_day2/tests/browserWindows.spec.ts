import { test, expect } from '../fixtures/baseFixture';

test.describe('Browser Windows Tests', () => {

    test(
        'TC_001 Verify New Tab button opens a new tab',

        async ({ browserWindowsPage, context }) => {

            await browserWindowsPage.goto();

            const [newTab] =
                await Promise.all([
                    context.waitForEvent('page'),
                    browserWindowsPage.newTabButton.click()
                ]);

            await newTab.waitForLoadState();

            expect(newTab).toBeTruthy();
        }
    );

    test(
        'TC_002 Verify content of newly opened tab',

        async ({ browserWindowsPage, context }) => {

            await browserWindowsPage.goto();

            const [newTab] =
                await Promise.all([
                    context.waitForEvent('page'),
                    browserWindowsPage.newTabButton.click()
                ]);

            await newTab.waitForLoadState();

            await expect(
                newTab.locator('#sampleHeading')
            ).toHaveText(
                'This is a sample page'
            );
        }
    );

    test(
        'TC_003 Close child tab and switch back',

        async ({ browserWindowsPage, context }) => {

            await browserWindowsPage.goto();

            const parentPage =
                browserWindowsPage.page;

            const [newTab] =
                await Promise.all([
                    context.waitForEvent('page'),
                    browserWindowsPage.newTabButton.click()
                ]);

            await newTab.close();

            await expect(parentPage)
                .toHaveURL('/browser-windows');
        }
    );

    test(
        'TC_004 Verify New Window Message',

        async ({ browserWindowsPage, context }) => {

            await browserWindowsPage.goto();

            const [messageWindow] =
                await Promise.all([
                    context.waitForEvent('page'),
                    browserWindowsPage
                        .newWindowMessageButton
                        .click()
                ]);

            const text =
                await messageWindow
                    .locator('body')
                    .textContent();

            expect(text)
                .toContain(
                    'Knowledge increases by sharing'
                );
        }
    );

});