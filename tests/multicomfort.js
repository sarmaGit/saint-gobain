var user = require('./credentials.js');

module.exports = {
    'multicomfort': function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/multicomfort')

            // type meters, calc and buy

            .waitForElementVisible('//input[contains(@class,"field_text js-calc__fld")]')
            .clearValue('//input[contains(@class,"field_text js-calc__fld")]')
            .click('//input[contains(@class,"field_text js-calc__fld")]')
            .setValue('//input[contains(@class,"field_text js-calc__fld")]', [33, browser.Keys.HOME])
            // костыль
            .setValue('//input[contains(@class,"field_text js-calc__fld")]', 33)
            .click('//div[contains(@class,"btn btn_main")]')
            .waitForElementVisible('//div[contains(@class,"b-tarif-list row row_indent row_flex")]/div[2]/div/div[3]')
            .click('//div[contains(@class,"b-tarif-list row row_indent row_flex")]/div[2]/div/div[3]')

            // add to cart

            .waitForElementVisible('//a[contains(@class,"btn btn_main sz_l")]')
            .click('//a[contains(@class,"btn btn_main sz_l")]')

            // choose delivery

            .waitForElementVisible('//input[@id="edit-checkout"]')
            .click('//div[@id="edit-delivery-type"]/div[2]/div')
            .click('//input[@id="edit-checkout"]')

            // type your personal data

            .waitForElementVisible('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]')
            .setValue('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]',
                user.email)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-first-name-und-0-value"]', user.firstName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-last-name-und-0-value"]', user.lastName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-phone-und-0-value"]', user.phone)
            .click('//input[@id="edit-customer-profile-billing-agreement"]')
            .click('//input[@id="edit-continue"]')

            // choose payment

            .waitForElementVisible('//input[@id="edit-continue"]')

            .click('//div[@id="edit-commerce-payment-payment-method"]/div[4]/div')
            // .click('//input[@id="edit-continue"]')
            // .pause(4000)
            .end();

    }
};