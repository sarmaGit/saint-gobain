var user = require('../credentials/credentials.js');

module.exports = {
    'standart order plus delivery': function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/search/material/gipsokartonnyy-list')

            /*
            choose any goods
            START -- https://shop.saint-gobain.ru/search/material/XXXX
            */
            .waitForElementVisible('//div[contains(@class,"view-content")]//a[1]')
            .click('//div[contains(@class,"view-content")]//a[1]')

            /*
            set amount , click "to cart"
            PRODUCT -- https://shop.saint-gobain.ru/product/XXXX
            */
            .waitForElementVisible('//input[@id="spinner"]')
            .clearValue('//input[@id="spinner"]')
            .setValue('//input[@id="spinner"]', 1)
            .click('//span[contains(@class,"btn-buy")]')

            /*
            choose delivery
            CART -- https://shop.saint-gobain.ru/cart
            */
            .waitForElementVisible('//input[@id="edit-checkout"]')
            .click('//input[@id="edit-checkout"]')

            /*
            type addres (clear value if need), finish order
            DELIVERY -- https://shop.saint-gobain.ru/checkout/XXXX
            */
            .waitForElementVisible('//input[@id="edit-customer-profile-shipping-string-address"]')
            .setValue('//input[@id="edit-customer-profile-shipping-string-address"]',
                user.address)
            .click('//input[@id="edit-continue"]')

            /*
            type your personal data
            PERSONAL DATA -- https://shop.saint-gobain.ru/checkout/XXXX/shipping
            */
            .waitForElementVisible('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]')
            .setValue('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]',
                user.email)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-first-name-und-0-value"]', user.firstName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-last-name-und-0-value"]', user.lastName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-phone-und-0-value"]', user.phone)
            .click('//input[@id="edit-customer-profile-billing-agreement"]')
            .click('//input[@id="edit-continue"]')

            /*
            choose payment
            PAYMENT -- https://shop.saint-gobain.ru/checkout/XXXX/review
            */
            .waitForElementVisible('//input[@id="edit-continue"]')
            // FINISH ORDER
            //.click('//input[@id="edit-continue"]')
            // .pause(4000)

            .end();
    }
};