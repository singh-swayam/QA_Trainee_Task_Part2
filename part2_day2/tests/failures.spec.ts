import { test, expect }
from '@playwright/test';

test.describe('Failure Categories', () => {

    test('Locator Not Found', async ({ page }) => {

        await page.goto('/books');
        await page.locator('#wrongLocator').click();

    });

    test('Assertion Failure', async ({ page }) => {

        await page.goto('/books');
        await expect(page.getByText('Git Pocket Guide')).toHaveText('Wrong Book');

    });

    test('URL Mismatch', async ({ page }) => {

        await page.goto('/books');
        await expect(page).toHaveURL('/wrong-url');

    });

    test('Element Visibility Failure', async ({ page }) => {

        await page.goto('/books');
        await expect(page.locator('#hiddenElement')).toBeVisible();

    });

    test('Element Count Failure', async ({ page }) => {

        await page.goto('/books');
        await expect(page.locator('.rt-tr-group')).toHaveCount(50);
    
    });

    test('Text Validation Failure', async ({ page }) => {

        await page.goto('/browser-windows');
        await expect(page.locator('h1')).toHaveText('Incorrect Heading');
    
    });

    test('Network Failure', async ({ page }) => {

        await page.route('**/BookStore/v1/Books', route => route.abort());
        await page.goto('/books');
        await expect(page.getByText('Git Pocket Guide')).toBeVisible();
    
    });

    test('Missing Element Interaction', async ({ page }) => {
        
        await page.goto('/browser-windows');
        await page.locator('#fakeButton').click();
    
    });

});