import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class ExpectedPage extends BasePage {    
    constructor(page) {
        super(page);
        this.resultFrame = this.page.locator('#popmake-4406');
        this.resultText = this.page.locator('.academy-bug-overlay');
    }

    async goToExpect () {
        await allure.step ("На главной странице отобразилась информация о найденном баге", async () => {
        await this.resultFrame.toBeVisible();
        await this.resultFrame.toContainText('In this bug');
    });
    }

    async goToFindText () {
        await allure.step ("На странице отобразилось оповещение о найденном баге", async () => {
        await this.resultText.toBeVisible();
        await this.resultText.toContainText('You found a crash bug');
    });
    }

}