import Page from "@UIPages/BasePage";

class LoginPage extends Page {

    get inputUsername() { return $('input[type="email"]') }
    get inputPassword() { return $('input[type="password"]') }
    get btnSubmit() { return $('button[type="submit"]') }
    get linkForgotPassword() { return $('a[data-qa="forgot-password?-"]') }
    get invalidEmailError() { return $('rx-input[type="email"] div[data-qa="div-error"]') }
    get invalidPasswordError() { return $('rx-input[type="password"] div[data-qa="div-error"]') }

    async login(username: string, password: string) {
        await this.waitAndEnterData(this.inputUsername, username);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndclick(this.btnSubmit);
    }

    async openApp() {
        await super.open('https://qa.roomex.com/login');
    }

    async clickLoginButton() {
        await this.waitAndclick(this.btnSubmit);
    }

    async clickForgotPasswordLink() {
        await this.waitAndclick(this.linkForgotPassword);
    }
}

export default new LoginPage();
