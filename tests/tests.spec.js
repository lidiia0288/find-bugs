import { test } from '@playwright/test';
import * as allure from "allure-js-commons";
import {App} from '../src/pages/app.page'

const url = ('https://academybugs.com/find-bugs/');
const productUrl = ('https://academybugs.com/store/dark-grey-jeans/');
let app;


test('Баг пагинации на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToPagination();

  await app.expectedPage.goToExpect();
}, { retry: 4 });

test('Баг неполного изображения товара на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToProductCard();

  await app.expectedPage.goToExpect();
}, { retry: 4 });

test('Баг выбора валюты', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToChange();
  
  await app.expectedPage.goToExpect();
}, { retry: 4 });

test('Баг публикации отзыва на странице продукта', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToWriteComment();
  await app.productPage.goToWritePersonalData();
  await app.productPage.goToPost();

  await app.expectedPage.goToExpect();
}, { retry: 4 });

test('Баг выбора количества товара>', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.cartPage.goToCart();
  await app.cartPage.goToUpdate();
  
  await app.expectedPage.goToExpect();
}, { retry: 4 });
