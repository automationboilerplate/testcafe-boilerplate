import { Selector } from 'testcafe';

export class ListBox {
    constructor(locator) {
        this.listbox = Selector(locator)
        this.listboxOptions = this.listbox.find("option")
    }
}