// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Conversion from USD to JPY (1 USD = 156.5 JPY)", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    const expected = (10 / 1.07) * 156.5;
    expect(fromDollarToYen(10)).toBeCloseTo(expected);
})

test("Conversion from JPY to GBP (1 JPY = 0.87 GBP)", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js')
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBeCloseTo(expected);
})