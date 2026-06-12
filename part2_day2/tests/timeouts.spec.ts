import { test, expect }
from '@playwright/test';

test.describe('Timeout Categories', () => {

    test('Test Timeout', async ({ page }) => {
        
        test.setTimeout(3000);
        await page.waitForTimeout(5000);
    });

    test('Expect Timeout', async ({ page }) => {
        
        await page.goto('/books');
        await expect(page.locator('#doesNotExist')).toBeVisible({timeout: 2000});
    
    });

    test('Action Timeout', async ({ page }) => {
        
        page.setDefaultTimeout(1000);
        await page.goto('/books');
        await page.locator('#fakeButton').click();
    
    });

    test('Navigation Timeout', async ({ page }) => {
        
        page.setDefaultNavigationTimeout(1);
        await page.goto('https://demoqa.com/books');
    
    });

});