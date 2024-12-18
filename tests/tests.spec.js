import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import {App} from '../src/pages/app.page'

const url = 'https://academybugs.com/find-bugs/';
const productUrl = 'https://academybugs.com/store/flamingo-tshirt/';
const mistakeFrame = 'You found a crash bug, examine the page for';
const mistakeAlarm = 'In this bug';
let app;


test('Баг пагинации на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToPagination();
  await app.mainPage.errorAlarm.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorAlarm).toContainText(mistakeFrame);

});

test('Баг неполного изображения товара на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToProductCard();

  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeAlarm);
});

test('Баг выбора валюты', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToChange();
  
  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeAlarm);
});


test('Баг публикации отзыва на странице продукта', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToWriteComment();
  await app.productPage.goToWritePersonalData();
  await app.productPage.goToPost();

  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeAlarm);
});

test('Баг выбора количества товара>', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.cartPage.goToCart();
  await app.cartPage.goToUpdate();
  
  await app.mainPage.errorFrame.waitFor({ state: 'visible' }); //ждем загрузки элемента

  await expect(await app.mainPage.errorFrame).toContainText(mistakeAlarm);
});
