module.exports = {
    'standart order plus delivery' : function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/search/material/gidroizolyacionnye-materialy-i-gruntovki')
            // click any goods
            .useXpath()
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
            .clearValue('//input[@id="edit-customer-profile-shipping-string-address"]')
            .setValue('//input[@id="edit-customer-profile-shipping-string-address"]',
                'Москва, улица Расплетина, 24')
            .click('//input[@id="edit-customer-profile-shipping-delivery-submit-1"]')
            .assert.visible('//input[@id="edit-continue"]')
            .end();
    }
};