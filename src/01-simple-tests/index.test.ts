// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const numA = 7;
  const numB = 11;
  test('should add two numbers', () => {
    const rawInput = { a: numA, b: numB, action: Action.Add };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(18);
  });

  test('should subtract two numbers', () => {
    const rawInput = { a: numA, b: numB, action: Action.Subtract };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(-4);
  });

  test('should multiply two numbers', () => {
    const rawInput = { a: numA, b: numB, action: Action.Multiply };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(77);
  });

  test('should divide two numbers', () => {
    const rawInput = { a: numA, b: numB, action: Action.Divide };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(0.6363636363636364);
  });

  test('should exponentiate two numbers', () => {
    const rawInput = { a: numA, b: numB, action: Action.Exponentiate };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(1977326743);
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
