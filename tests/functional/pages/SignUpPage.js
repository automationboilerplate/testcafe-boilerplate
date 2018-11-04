import { Selector, t } from 'testcafe';
import {ListBox} from '../utils/DriverUtils'

export default class SignUpPage {
    constructor() {
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
    }

    async setSignUpDetails() {
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
    }
}