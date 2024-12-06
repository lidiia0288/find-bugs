import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class ErrorPage extends BasePage {    
    constructor(page) {
        super(page);
        this.resultFrame = this.page.locator('#popmake-4406');
        this.resultText = this.page.getByRole('heading').nth(1);
    }

    async goToErrorFrame () {
        await allure.step ("На странице отобразилась информация о найденном баге", async () => {
        await this.resultFrame.focus();
        });
    }

    async goToError () {
        await allure.step ("На странице отобразилось предупреждение о найденном баге", async () => {
        await this.resultText.focus();
    });
}
}

    

