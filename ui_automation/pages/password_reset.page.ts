import Page from "@UIPages/BasePage";

class PasswordResetPage extends Page {

    get inputEmail() { return $('input[type="email"]') }
    get btnSubmit() { return $('button[type="submit"]') }
    get btnResetPwd() { return $('button[type="submit"]') }
    get invalidEmailError() { return $('rx-alert[type="danger"]') }

    async enterInvalidEmail(email: string) {
        await this.waitAndEnterData(this.inputEmail, email);
        await this.waitAndclick(this.btnSubmit);
    }

    async clickResetPasswordButton() {
        await this.waitAndclick(this.btnResetPwd);
    }

}

export default new PasswordResetPage();