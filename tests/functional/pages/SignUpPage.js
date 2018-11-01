import { Selector, t } from 'testcafe';

export default class SignUpPage {
    constructor() {
        this.txtFirstName = Selector(".userdata-firstname").find('input')
        this.txtLastName = Selector(".userdata-lastname").find('input')
    }

    async setSignUpDetails() {
        await t
            .typeText(this.txtFirstName, "ICON")
            .typeText(this.txtFirstName, "SuperUser")
    }
}