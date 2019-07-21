import {
  addPercentageSign,
  convertToPercentage,
  takeNumberOnly,
  calcInterest,
  convertToDollarFormat
} from '../util';

describe('Calculator util functions', () => {
  it('addPercentageSign should be run as expect', () => {
    const data = '1';
    const expectedData = '1%';
    expect(addPercentageSign(data)).toBe(expectedData);
  });
  it('addPercentageSign should be fail', () => {
    const data = '1';
    const expectedData = '1';
    expect(addPercentageSign(data)).not.toBe(expectedData);
  });

  it('convertToPercentage should be run as expect when passing true as sec param', () => {
    const data = '1';
    const expectedData = '0.01%';
    expect(convertToPercentage(data)).toBe(expectedData);
  });

  it('convertToPercentage should be run as expect when passing false as sec param', () => {
    const data = '1';
    const expectedData = '0.01';
    expect(convertToPercentage(data, false)).toBe(expectedData);
  });

  it('convertToPercentage should be fail as expect', () => {
    const data = '1';
    const expectedData = '0.1';
    expect(convertToPercentage(data, false)).not.toBe(expectedData);
  });

  it('convertToPercentage should be return 1.01', () => {
    const data = '101';
    const expectedData = '1.01';
    expect(convertToPercentage(data, false)).toBe(expectedData);
  });

  it('takeNumberOnly should be return number only when pass any special characters', () => {
    const data = '1. %0dsf1';
    const expectedData = 101;
    expect(takeNumberOnly(data)).toBe(expectedData);
  });

  it('takeNumberOnly should be return a number ', () => {
    const data = '1. %0dsf1';
    const expectedData = 101;
    expect(takeNumberOnly(data)).toEqual(expect.any(Number));
  });

  it('takeNumberOnly should be return a string ', () => {
    const data = '1. %0dsf1';
    const expectedData = 101;
    expect(takeNumberOnly(data)).not.toEqual(expect.any(String));
  });

  it('calcInterest shoulde be return a number', () => {
    expect(
      calcInterest({
        rate: 1,
        loanPrincipal: 1
      })
    ).toEqual(expect.any(Number));
  });

  it('calcInterest should not be returning a number', () => {
    expect(
      calcInterest({
        rate: 1,
        loanPrincipal: 1
      })
    ).not.toEqual(expect.any(String));
  });

  it('convertToDollarFormat should be return dollar format', () => {
    const value = 100222;
    const expectedValue = '$100,222';
    expect(convertToDollarFormat(value)).toEqual(expectedValue);
  });
});
