import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.btnSignUp = Selector("#signup-button")
        this.btnLogin = Selector("#login-button")
    }   
}