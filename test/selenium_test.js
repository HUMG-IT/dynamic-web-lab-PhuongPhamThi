const { Builder, By, until } = require('selenium-webdriver');
require('jest');

async function runTests() {
    let driver;

    try {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/homepage.html'); // Đường dẫn đến giao diện web của bạn

        // Name Tests
        console.log('\nTesting Name Submission:');
        await driver.findElement(By.id('name')).sendKeys('John');
        await driver.findElement(By.id('submitName')).click();
        const nameResponse = await driver.wait(until.elementLocated(By.id('nameResponse')), 5000);
        console.log(`Name test with 'John': ${(await nameResponse.getText()).includes('Xin chào, John!') ? 'Passed' : 'Failed'}`);

        // BMI Tests  
        console.log('\nTesting BMI Calculation:');
        const bmiTests = [
            { weight: 60, height: 165, expected: 'Bình thường' },
            { weight: 45, height: 165, expected: 'Gầy' },
            { weight: 75, height: 165, expected: 'Thừa cân' },
            { weight: 90, height: 165, expected: 'Béo phì' }
        ];

        for (let test of bmiTests) {
            await driver.findElement(By.id('weight')).clear();
            await driver.findElement(By.id('height')).clear();
            await driver.findElement(By.id('weight')).sendKeys(test.weight);
            await driver.findElement(By.id('height')).sendKeys(test.height);
            await driver.findElement(By.id('submitBMI')).click();

            const bmiResult = await driver.wait(until.elementLocated(By.id('bmiResult')), 5000);
            console.log(`BMI test for ${test.weight}kg/${test.height}cm: ${(await bmiResult.getText()).includes(test.expected) ? 'Passed' : 'Failed'}`);
        }

        // // Test xử lý dữ liệu không hợp lệ
        // await driver.findElement(By.id('weight')).clear();
        // await driver.findElement(By.id('height')).clear();
        // await driver.findElement(By.id('weight')).sendKeys(-1);
        // await driver.findElement(By.id('height')).sendKeys(165);
        // await driver.findElement(By.id('calculateBMI')).click();
        // const bmiError = await driver.wait(until.elementLocated(By.className('error')), 5000);
        // console.log(`Invalid BMI input test: ${(await bmiError.getText()).includes('Trọng lượng và chiều cao phải lớn hơn 0') ? 'Passed' : 'Failed'}`);

        // Age Tests
        console.log('\nTesting Age Calculation:');
        await driver.findElement(By.id('birthYear')).clear();
        await driver.findElement(By.id('birthYear')).sendKeys('2004');
        await driver.findElement(By.id('submitAge')).click();
        const ageResult = await driver.wait(until.elementLocated(By.id('ageResult')), 5000);
        const expectedAge = new Date().getFullYear() - 2004;
        console.log(`Valid birth year test: ${(await ageResult.getText()).includes(expectedAge.toString()) ? 'Passed' : 'Failed'}`);

        // const futureYear = new Date().getFullYear() + 1;
        // await driver.findElement(By.id('birthYear')).clear();
        // await driver.findElement(By.id('birthYear')).sendKeys(futureYear);
        // await driver.findElement(By.id('calculateAge')).click();
        // const ageError = await driver.wait(until.elementLocated(By.className('error')), 5000);
        // console.log(`Future birth year test: ${(await ageError.getText()).includes('Năm sinh không hợp lệ!') ? 'Passed' : 'Failed'}`);

        // await driver.findElement(By.id('birthYear')).clear();
        // await driver.findElement(By.id('birthYear')).sendKeys('');
        // await driver.findElement(By.id('calculateAge')).click();
        // const emptyYearError = await driver.wait(until.elementLocated(By.className('error')), 5000);
        // console.log(`Empty birth year test: ${(await emptyYearError.getText()).includes('Năm sinh là bắt buộc!') ? 'Passed' : 'Failed'}`);
    } catch (error) {
        console.error('Test failed:', error.message);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

runTests();
