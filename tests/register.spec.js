import { test, expect } from '@playwright/test';

test.describe('Registration', () => {
    
    function getFrame(page) {
        return page.frameLocator('iframe[name="framelive"]');
    };

    async function openRegistration(frame) {
        const signIn = frame.getByLabel('Sign in');
        await signIn.waitFor();
        await signIn.click();

        const createAccount = frame.getByRole('link', { name: 'Create your account' });
        await createAccount.waitFor();
        await createAccount.click();
    }

    test('User can successfully register with valid data', async ({ page }) => {
        const randomEmail = `test${Date.now()}@example.com`;
        
        await page.goto('https://demo.prestashop.com/#/en/front');
        await page.waitForSelector('iframe[name="framelive"]');

        const frame = await getFrame(page);

        await openRegistration(frame);

        await frame.getByRole('radio', { name: 'Mr.' }).check();
        await frame.getByRole('textbox', { name: 'First name' }).fill('Test');
        await frame.getByRole('textbox', { name: 'Last name' }).fill('User');
        await frame.getByRole('textbox', { name: 'Email', exact: true }).fill(randomEmail);
        await frame.getByRole('textbox', { name: 'Password' }).fill('TestPass123!');
        await frame.getByRole('textbox', { name: 'Birthdate' }).fill('05/03/1991');
        await frame.getByRole('checkbox', { name: 'I agree to the terms and' }).check();
        await frame.getByRole('checkbox', { name: 'Customer data privacy The' }).check();

        await frame.getByRole('button', { name: 'Create account' }).click();

        await expect(
            frame.getByRole('button', { name: /View my account/i })
        ).toBeVisible();
    });

    test('Registration fails with invalid email', async ({ page }) => {

        await page.goto('https://demo.prestashop.com/#/en/front');
        await page.waitForSelector('iframe[name="framelive"]');

        const frame = await getFrame(page);

        await openRegistration(frame);

        await frame.getByRole('radio', { name: 'Mr.' }).check();
        await frame.getByRole('textbox', { name: 'First name' }).fill('Test');
        await frame.getByRole('textbox', { name: 'Last name' }).fill('User');
        await frame.getByRole('textbox', { name: 'Email', exact: true }).fill('test.com'); // invalid
        await frame.getByRole('textbox', { name: 'Password' }).fill('TestPass123!');

        await frame.getByRole('button', { name: 'Create account' }).click();

        const email = frame.getByRole('textbox', { name: 'Email', exact: true });

        expect(await email.evaluate(el => el.validity.typeMismatch)).toBe(true);
    });

    test('Registration shows validation for empty required fields', async ({ page }) => {

        await page.goto('https://demo.prestashop.com/#/en/front');
        await page.waitForSelector('iframe[name="framelive"]');

        const frame = await getFrame(page);

        await openRegistration(frame);

        await frame.getByRole('button', { name: 'Create account' }).click();

        const firstName = frame.getByRole('textbox', { name: 'First name' });
        const lastName = frame.getByRole('textbox', { name: 'Last name' });
        const email = frame.getByRole('textbox', { name: 'Email', exact: true });

        expect(await firstName.evaluate(el => el.validity.valueMissing)).toBe(true);
        expect(await lastName.evaluate(el => el.validity.valueMissing)).toBe(true);
        expect(await email.evaluate(el => el.validity.valueMissing)).toBe(true);
    });
});