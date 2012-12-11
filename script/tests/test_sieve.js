/// <reference path="../libs/Sieve_of_Eratosthenes.js" />
/// <reference path="../libs/qunit/qunit-1.10.0" />

/*
 * Test Structure
 *
    test("", function () {

    // Arrange

    // Act

    // Asserts


    });
 */


test("No primes test", function () {

    // Arrange
    var expected = [];

    // Act
    var actual = generatePrimes(0);

    // Asserts
    deepEqual(actual, expected, "Empty array");
});

test("Minimum sieve array test", function () {

    // Arrange
    var expected = [2];

    // Act
    var actual = generatePrimes(2);

    // Asserts
    equal(actual.length, expected.length, "Same length");
    deepEqual(actual, expected, "Same content");

});

test("Sieve with 2 elements test", function () {

    // Arrange
    var expected = [2, 3];

    // Act
    var actual = generatePrimes(3);

    // Asserts
    equal(actual.length, expected.length, "Same length");
    deepEqual(actual, expected, "Same content");
});

test("Primes between 0 and 100 test", function () {

    // Arrange
    var expectedNumberOfPrimes = 25;
    var expectedLastPrime = 97;

    // Act
    var actual = generatePrimes(100);

    // Asserts
    equal(actual.length, expectedNumberOfPrimes, "Same length");
    deepEqual(actual[24], expectedLastPrime, "Same last element");

});

