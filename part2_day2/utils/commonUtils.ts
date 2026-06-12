export class CommonUtils {

    getCurrentTimestamp(): string {
        return new Date().toISOString();
    }

    generateRandomBookName(): string {
        return `Book-${Math.floor(Math.random() * 100000)}`;
    }

    generateRandomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }

    generateRandomString(length: number): string {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let result = '';

        for (let i = 0; i < length; i++) {

            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return result;
    }
}