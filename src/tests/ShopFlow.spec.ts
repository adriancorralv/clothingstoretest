import { test, expect } from "@playwright/test";
import { randomUser } from "../utils/RandomUser";
import { AccountCreatedPage } from "../pages/AccountCreated";
import { CheckOutPage } from "../pages/CheckOutPage";
import { LoginPage } from "../pages/LoginPage";
import { NavBarPage } from "../pages/NavBarPage";
import { PaymentDonePage } from "../pages/PaymentDonePage";
import { PaymentPage } from "../pages/PaymentPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductPage } from "../pages/ProductPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ViewCartPage } from "../pages/ViewCartPage";
import { UtilsClass } from "../utils/Utils";

test.describe("Shop Flow Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the homepage before each test
    await page.goto("/");
  });

  test("Shop Product", async ({ page }) => {
    // Create instances of page objects
    const navBarPage = new NavBarPage(page);
    const productPage = new ProductPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const viewCartPage = new ViewCartPage(page);
    const checkOutPage = new CheckOutPage(page);
    const paymentPage = new PaymentPage(page);
    const paymentDonePage = new PaymentDonePage(page);
    const loginPage = new LoginPage(page);
    const signUpPage = new SignUpPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const utils = new UtilsClass(page);

    // Get a random number for the product quantity (from 1 to 20)
    const randomNumber = utils.getRandomInt(1, 20);

    await expect(page).toHaveURL("/");

    // Navigate to the products page using the navigation bar
    await navBarPage.clickElementinNav("Products");
    await expect(page).toHaveURL("/products");

    // Select the third product on the product page
    await productPage.clickOnProduct(3);
    await expect(page).toHaveURL(/product_details/);

    // Capture product name and add product to cart with a random quantity
    const productName = await productDetailPage.getProductName();
    await productDetailPage.fillQuantity(randomNumber);
    await productDetailPage.clickAddToCart();

    // Check if the modal is visible after adding to cart
    expect(utils.isModalVisible()).toBeTruthy();

    // View the cart to review added product details
    await productDetailPage.clickViewCart();
    expect(page).toHaveURL("/view_cart");
    expect(await viewCartPage.getTextFirstProductInCart()).toBe(productName);
    expect(await viewCartPage.getQuantityOfFirstProductInCart()).toBe(
      randomNumber.toString()
    );

    // Proceed to the checkout process
    await viewCartPage.clickProceedToCheckout();
    expect(utils.isModalVisible()).toBeTruthy();

    // Start login/registration process from the cart page
    await viewCartPage.clickRegisterLogin();
    await expect(page).toHaveURL("/login");
    await expect(loginPage.isSignUpButtonVisible()).toBeTruthy();

    // Sign up with a random user
    await loginPage.fillEmail(randomUser.email);
    await loginPage.fillName(randomUser.name);
    await loginPage.clickSignUp();
    await expect(page).toHaveURL("/signup");
    await expect(await signUpPage.isEmailFilledCorrectly()).toBe(
      randomUser.email
    );

    // Complete the signup form with user details
    await signUpPage.chooseGender("Mr.");
    await signUpPage.fillPassword(randomUser.password);
    await signUpPage.selectDayOfBirth(randomUser.dateOfBirth.day);
    await signUpPage.selectMonthOfBirth(randomUser.dateOfBirth.month);
    await signUpPage.selectYearOfBirth(randomUser.dateOfBirth.year);
    await signUpPage.checkNewsletter();
    await signUpPage.checkSpecialOffers();
    await signUpPage.fillFirstName(randomUser.firstName);
    await signUpPage.fillLastName(randomUser.lastName);
    await signUpPage.fillCompany(randomUser.company);
    await signUpPage.fillAddress(randomUser.address.street);
    await signUpPage.fillAddress2(randomUser.address.street);
    await signUpPage.selectCountry(randomUser.address.country);
    await signUpPage.fillState(randomUser.address.state);
    await signUpPage.fillCity(randomUser.address.city);
    await signUpPage.filleZipcode(randomUser.address.zipCode);
    await signUpPage.fillMobileNumber(randomUser.phone);
    await signUpPage.clickCreateAccount();

    // Verify that the account is created and continue
    expect(page).toHaveURL("/account_created");
    expect(await accountCreatedPage.verifyAccountCreated).toBeTruthy();
    await accountCreatedPage.clickContinue();
    await expect(page).toHaveURL("/");

    // Check that the cart still has the same product and quantity after signup
    await navBarPage.clickElementinNav("Cart");
    expect(await viewCartPage.getTextFirstProductInCart()).toBe(productName);
    expect(await viewCartPage.getQuantityOfFirstProductInCart()).toBe(
      randomNumber.toString()
    );

    // Go back to checkout
    await viewCartPage.clickProceedToCheckout();
    expect(page).toHaveURL("/checkout");
    expect(await checkOutPage.verifyCountryBillingAddress()).toBe(
      randomUser.address.country
    );
    expect(await checkOutPage.verifyPhoneBillingAddress()).toBe(
      randomUser.phone
    );
    expect(await checkOutPage.verifyCountryDeliveryAddress()).toBe(
      randomUser.address.country
    );
    expect(await checkOutPage.verifyPhoneDeliveryAddress()).toBe(
      randomUser.phone
    );
    expect(await viewCartPage.getTextFirstProductInCart()).toBe(productName);
    expect(await viewCartPage.getQuantityOfFirstProductInCart()).toBe(
      randomNumber.toString()
    );

    // Place the order with a comment
    await checkOutPage.fillComments("This is a test comment");
    await checkOutPage.clickPlaceOrder();
    expect(page).toHaveURL("/payment");

    // Fill out payment details and submit payment
    await paymentPage.fillNameOnCard(randomUser.name);
    await paymentPage.fillCardNumber(randomUser.card.number);
    await paymentPage.fillCvv(randomUser.card.cvv);
    await paymentPage.fillExpiryMonth(randomUser.card.expiryMonth);
    await paymentPage.fillExpiryYear(randomUser.card.expiryYear);
    await paymentPage.clickPayNow();
    expect(page).toHaveURL(/payment_done/);
    expect(await paymentDonePage.getPaymentDoneMessage()).toBe("Order Placed!");

    // Continue after successful payment and finish the flow
    await paymentDonePage.clickContinue();
    expect(page).toHaveURL("/");

    // Logout and check that the user is redirected to the login page
    await navBarPage.clickElementinNav("Logout");
    expect(await loginPage.isSignUpButtonVisible()).toBeTruthy();
  });
});
