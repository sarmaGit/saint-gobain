var user = require('../credentials/credentials.js');

module.exports = {
    'complex decision': function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/')

            /*
            choose complex decision
            MAIN -- https://shop.saint-gobain.ru/
            */

            .waitForElementVisible('//h3[text()[contains(.,"КОМПЛЕКСНЫЕ РЕШЕНИЯ")]]')
            .click('//h3[text()[contains(.,"КОМПЛЕКСНЫЕ РЕШЕНИЯ")]]')
            .pause(1000)
            .waitForElementVisible('//*[@id="ui-id-8"]/*//a')
            .click('//*[@id="ui-id-8"]/*//a')

            /*
            add to cart
            CATEGORY -- https://shop.saint-gobain.ru/content/xxx
            */

            .waitForElementVisible('//button[contains(@class,"btn-buy")]')
            .click('//button[contains(@class,"btn-buy")]')

            /*
            choose delivery
            CART -- https://shop.saint-gobain.ru/cart
            */
            .waitForElementVisible('//input[@id="edit-checkout"]')
            .click('//div[@id="edit-delivery-type"]/div[2]/div')
            .click('//div[@id="edit-pickup"]/div[2]/div')
            .click('//input[@id="edit-checkout"]')

            /*
            type your personal data
            PERSONAL DATA -- https://shop.saint-gobain.ru/checkout/41872/shipping
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
            PAYMENT -- https://shop.saint-gobain.ru/checkout/41900/review
            */

            .waitForElementVisible('//input[@id="edit-continue"]')
            //.click('//input[@id="edit-continue"]')
            // .pause(4000)

            .end();

    }
};