import { expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { BasePage } from "./base.page";

export class ExpectedPage extends BasePage {    
    constructor(page) {
        super(page);
        this.resultFrame = this.page.locator('#popmake-4406');
    }

    async goToExpect () {
        await allure.step ("На главной странице отобразилась информация о найденном баге", async () => {
        await expect(this.resultFrame).toBeVisible();
        await expect(this.resultFrame).toContainText('In this bug');
    });
    }

}