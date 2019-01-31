var user = require('../credentials/credentials.js');

module.exports = {
    'standart order plus delivery' : function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/search/material/gidroizolyacionnye-materialy-i-gruntovki')

            // click any goods

            .waitForElementVisible('//div[contains(@class,"view-content")]//a[1]')
            .click('//div[contains(@class,"view-content")]//a[1]')

            // set amount , click "to cart"

            .waitForElementVisible('//input[@id="spinner"]')
            .setValue('//input[@id="spinner"]',1)
            .click('//span[contains(@class,"btn-buy")]')

            // choose delivery

            .waitForElementVisible('//input[@id="edit-checkout"]')
            .click('//input[@id="edit-checkout"]')

            // type addres (clear value if need), finish order

            .waitForElementVisible('//input[@id="edit-customer-profile-shipping-string-address"]')
            .setValue('//input[@id="edit-customer-profile-shipping-string-address"]',
                'Москва, улица Расплетина, 24')
            .click('//input[@id="edit-continue"]')

            // type your personal data

            .waitForElementVisible('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]')
            .setValue('//input[@id="edit-customer-profile-billing-field-customer-recepient-email-und-0-value"]',
                user.email)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-first-name-und-0-value"]',user.firstName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-last-name-und-0-value"]',user.lastName)
            .setValue('//input[@id="edit-customer-profile-billing-field-user-phone-und-0-value"]',user.phone)
            .click('//input[@id="edit-customer-profile-billing-agreement"]')
            .click('//input[@id="edit-continue"]')

            // choose payment

            .waitForElementVisible('//input[@id="edit-continue"]')
            //.click('//input[@id="edit-continue"]')
            // .pause(4000)

            .end();
    }
};