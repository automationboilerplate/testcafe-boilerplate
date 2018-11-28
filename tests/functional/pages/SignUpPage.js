import { Selector, t } from 'testcafe';
import {ListBox} from '../utils/DriverUtils'
import BasePage from './BasePage';

export default class SignUpPage extends BasePage {
    constructor() {
        super()
        this.txtFirstName    = Selector(".userdata-firstname")
        this.txtLastName     = Selector(".userdata-lastname")
        const selGenderObj   = new ListBox(".userdata-gender select")
        this.selGender       = selGenderObj.listbox
        this.selGenderOptions= selGenderObj.listboxOptions
        const monthListObj   = new ListBox(".userdata-birthdate .MonthPos")
        this.selBirthMonth   = monthListObj.listbox
        this.selBirthMonthOptions = monthListObj.listboxOptions
        const selBirthDayObj = new ListBox(".userdata-birthdate .DayPos")
        this.selBirthDay     = selBirthDayObj.listbox
        this.selBirthDayOptions = selBirthDayObj.listboxOptions
        const selBirthYearObj= new ListBox(".userdata-birthdate .YearPos")
        this.selBirthYear = selBirthYearObj.listbox
        this.selBirthYearOptions = selBirthYearObj.listboxOptions
        const selCountryObj = new ListBox(".userdata-country select")
        this.selCountry     = selCountryObj.listbox
        this.selCountryOptions = selCountryObj.listboxOptions
        this.txtEmailAddress = Selector(".EmailAddress")
        const selDomainObj  = new ListBox(".TopLevelDomain")
        this.selDomain      = selDomainObj.listbox
        this.selDomainOptions = selDomainObj.listboxOptions
        this.txtPassword = Selector("input.Password").nth(0)
        this.txtRetypePassword = Selector("input.Password").nth(1)
        const selSecurityQuestionObj = new ListBox(".SecurityQuestion select.ColouredFocus")
        this.selSecurityQuestion = selSecurityQuestionObj.listbox
        this.selSecurityQuestionOptions = selSecurityQuestionObj.listboxOptions
        this.txtSecurityAnswer = Selector(".SecurityQuestionAnswer input[type='text']")
        this.chkRobot = Selector(".recaptcha-checkbox-checkmark")
        this.btnCreateAccount = Selector("input.Submit")
    }

    async setSignUpDetails(emailAddress="superuser") {
        await t
            .typeText(this.txtFirstName, "ICON")
            .typeText(this.txtLastName, "SuperUser")
            .click(this.selGender)
            .click(this.selGenderOptions.withText("Female"))
            .click(this.selBirthMonth)
            .click(this.selBirthMonthOptions.withText('Sep'))
            .click(this.selBirthDay)
            .click(this.selBirthDayOptions.withText("8"))
            .click(this.selBirthYear)
            .click(this.selBirthYearOptions.withText("1983"))
            .click(this.selCountry)
            .click(this.selCountryOptions.withText("United States"))
            .typeText(this.txtEmailAddress, emailAddress)
            .click(this.selDomain)
            .click(this.selDomainOptions.withText("mail.com"))
            .typeText(this.txtPassword, "Nike@1234")
            .typeText(this.txtRetypePassword, "Nike@1234")
            .click(this.selSecurityQuestion)
            .click(this.selSecurityQuestionOptions.withText("What city were you born in?"))
            .typeText(this.txtSecurityAnswer, "Madurai")
    }
}