import test, { expect } from "@playwright/test";
import path from "path";
const UI_URL = "http://localhost:5173/";
test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);

  //get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("aa@aa.com");
  await page.locator("[name=password]").fill("1234567");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful")).toBeVisible();
});

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URL}add-hotel`);
  await page.locator('[name="name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test city");
  await page.locator('[name="country"]').fill("Test country");
  await page
    .locator('[name="description"]')
    .fill("This is a description for Test Hotel");
  await page.locator('[name="pricePerNight]').fill("100");
  await page.selectOption('select[name="starRating"]', "3");
  await page.getByLabel("Free Wifi").check();

  await page.locator('[name="adultCount"]').fill("2");
  await page.locator('[name="childCount"]').fill("2");

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, "files"),
  ]);

  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Hotel Saved!")).toBeVisible();
});
