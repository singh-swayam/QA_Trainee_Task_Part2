import { Page, Locator } from '@playwright/test';

export class BrowserWindowsPage {
    readonly page: Page;
    readonly newTabButton: Locator;
    readonly newWindowButton: Locator;
    readonly newWindowMessageButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.newTabButton = page.getByRole('button', {
            name: 'New Tab'
        });

        this.newWindowButton = page.getByRole('button', {
            name: 'New Window'
        });

        this.newWindowMessageButton = page.getByRole('button', {
            name: 'New Window Message'
        });
    }

    async goto() {
        await this.page.goto(
            '/browser-windows'
        );
    }
}