import { test, expect } from '@playwright/test';
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

  expect(await app.expectedPage.goToFindText('You found a crash bug'));
});

test('Баг неполного изображения товара на главной странице', async ({ page }) => {
  await allure.tag ("Main page")
  app = new App(page);

  await app.mainPage.open(url);
  await app.mainPage.goToProductCard();

  expect(await app.expectedPage.goToExpect('In this bug'));
});

test('Баг выбора валюты', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToChange();
  
  expect(await app.expectedPage.goToFindText('You found a crash bug'));
});


test('Баг публикации отзыва на странице продукта', async ({ page }) => {
  await allure.tag ("Product page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.productPage.goToWriteComment();
  await app.productPage.goToWritePersonalData();
  await app.productPage.goToPost();

  expect(await app.expectedPage.goToFindText('You found a crash bug'));


test('Баг выбора количества товара>', async ({ page }) => {
  await allure.tag ("Cart page")
  app = new App(page);

  await app.mainPage.open(productUrl);
  await app.cartPage.goToCart();
  await app.cartPage.goToUpdate();
  
  expect(await app.expectedPage.goToExpect('In this bug'));

  });
