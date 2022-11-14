import { Then, When } from '@cucumber/cucumber';
import loginPage from '@UIPages/login.page';
import passwordResetPage from '@UIPages/password_reset.page';
import FrameworkConstants from '@UIStatic/FrameworkConstants';

When(/^I navigate to password reset page$/, async () => {
    await loginPage.clickForgotPasswordLink();
});

When(/^I enter the invalidUsername$/, async (dataTable) => {
    await passwordResetPage.enterInvalidEmail(dataTable.hashes()[0].invalidUsername)
});

When(/^I click reset password button$/, async () => {
    await passwordResetPage.clickResetPasswordButton();
});

Then(/^I should see email id does not exist error message$/, async () => {
    await expect(passwordResetPage.invalidEmailError).toHaveTextContaining(FrameworkConstants.INVALID_EMAIL_ID_MSG);
});