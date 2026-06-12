import { test, expect } from '../fixtures/baseFixture';

test.describe('Network Mocking', () => {

    test('TC_005 Mock Books API', async ({ page, bookStorePage }) => {

        await page.route('**/BookStore/v1/Books', async route => {

            await route.fulfill({

                status: 200,
                contentType:'application/json',
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
                            description: 'Playwright',
                            website: 'https://example.com'
                        }
                    ]
                })
            });
        });

        await bookStorePage.goto();
        await expect(page.getByText('Playwright Testing Guide')).toBeVisible();

    });

    test('TC_006 Mock Empty Response', async ({ page, bookStorePage }) => {

        await page.route('**/BookStore/v1/Books', async route => {
                
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    books: []
                })
            });
        });

        await bookStorePage.goto();
        await expect(bookStorePage.bookRows).toHaveCount(0);

    });

    test('TC_007 Delayed Response', async ({ page, bookStorePage }) => {

        await page.route('**/BookStore/v1/Books', async route => {
            
            await new Promise(resolve => setTimeout(resolve, 3000));
            await route.continue();
        
        });

        await bookStorePage.goto();
        await expect(page.getByText('Git Pocket Guide')).toBeVisible();
    
    });
});