let homepage = require('../pages/homepage');

describe('calculator test', function () {

    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('100');
        homepage.enterSecondNumber('200');
        homepage.clickGo();
        homepage.verifyResult('300');
        browser.sleep(3000);

    });
});

