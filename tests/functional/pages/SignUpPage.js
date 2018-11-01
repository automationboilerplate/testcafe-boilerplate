import { Selector } from 'testcafe';

export default class SignUpPage {
    constructor() {
        this.txtFirstName = Selector(".userdata-firstname").find('input')
        this.txtLastName = Selector(".userdata-lastname").find('input')
    }
}