module.exports = {
    'standart order plus delivery' : function (browser) {
        browser
            .url('https://shop.saint-gobain.ru/search/material/gidroizolyacionnye-materialy-i-gruntovki')
            // click any goods
            .waitForElementVisible('a[href="/node/74"')
            .click('a[href="/node/74"')
            // set amount , click "to cart"
            .waitForElementVisible('[id="spinner"]')
            .setValue('[id="spinner"]',1)
            .click('span.btn-buy.to-cart')
            // choose delivery
            .waitForElementVisible('[id="edit-checkout"]')
            .click('[id="edit-checkout"]')
            // type addres (clear value if need), finish order
            .waitForElementVisible('[id="edit-customer-profile-shipping-string-address"]')
            .clearValue('[id="edit-customer-profile-shipping-string-address"]')
            .setValue('[id="edit-customer-profile-shipping-string-address"]',
                'Москва, улица Расплетина, 24')
            .click('[id="edit-customer-profile-shipping-delivery-submit-1"]')
            .assert.visible('[id="edit-continue"]')
            .end();
    }
};