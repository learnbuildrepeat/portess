
const utils = require('../utils/commons');

describe('Utils:commons', () => {

    test('input should be a valid number', () => {
        expect(() => {
            utils.isValidNumber()
        }).toThrowError();
        expect(() => {
            utils.isValidNumber(1)
        }).not.toThrowError();
        expect(() => {
            utils.isValidNumber("hello")
        }).toThrowError(`Invalid input value: 'hello'`);
    });

    test('input should be a valid array', () => {
        expect(utils.isEmptyArray()).toBeTruthy();
        expect(utils.isEmptyArray(null)).toBeTruthy();
        expect(utils.isEmptyArray([])).toBeTruthy();
        expect(utils.isEmptyArray([1])).toBeFalsy();
    });

});