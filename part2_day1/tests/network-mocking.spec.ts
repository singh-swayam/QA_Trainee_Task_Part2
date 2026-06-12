import { test, expect } from '@playwright/test';
import { BookStorePage } from '../pages/BookStorePage';

test.describe('Network Mocking Tests', () => {

    test('TC_005 Mock Books API with custom books', async ({ page }) => {

        await page.route(
            '**/BookStore/v1/Books',
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        books: [
                            {
                                isbn: '111',
                                title: 'Playwright Testing Guide',
                                subTitle: 'Automation',
                                author: 'QA Team',
                                publish_date: '2024',
                                publisher: 'Demo',
                                pages: 100,
                                description: 'Playwright Book',
                                website: 'https://example.com'
                            }
                        ]
                    })
                });
            }
        );

        const bookStorePage =
            new BookStorePage(page);

        await bookStorePage.goto();

        await expect(
            page.getByText('Playwright Testing Guide')
        ).toBeVisible();
    });

    test('TC_006 Mock empty response and verify behavior', async ({ page }) => {

        await page.route(
            '**/BookStore/v1/Books',
            async route => {

                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({
                        books: []
                    })
                });
            }
        );

        const bookStorePage =
            new BookStorePage(page);

        await bookStorePage.goto();

        await expect(
            bookStorePage.bookRows
        ).toHaveCount(0);
    });

    test('TC_007 Delay API response and verify page loads', async ({ page }) => {

        await page.route(
            '**/BookStore/v1/Books',
            async route => {

                await new Promise(resolve =>
                    setTimeout(resolve, 3000)
                );

                await route.continue();
            }
        );

        const bookStorePage =
            new BookStorePage(page);

        await bookStorePage.goto();

        await expect(
            page.getByText('Git Pocket Guide')
        ).toBeVisible();
    });

});