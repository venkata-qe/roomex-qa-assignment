import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from '@UIPages/login.page';
import SecurePage from '@UIPages/password_reset.page';

Given(/^I am on the login page$/, async () => {
    await LoginPage.openApp()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

