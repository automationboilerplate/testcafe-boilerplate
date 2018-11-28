import { Selector } from 'testcafe';
import BasePage from './BasePage';

export default class HomePage extends BasePage{
    constructor() {
        super()
        this.btnSignUp = Selector("#signup-button")
        this.btnLogin = Selector("#login-button")
    }   
}