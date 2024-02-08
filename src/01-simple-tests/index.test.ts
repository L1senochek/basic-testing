import { simpleCalculator, Action } from './index';

type rawInput = {
  a: number | string;
  b: number;
  action: Action | string;
};

describe('simpleCalculator tests', (): void => {
  const numA = 7;
  const numB = 11;
  test('should add two numbers', (): void => {
    const rawInput: rawInput = { a: numA, b: numB, action: Action.Add };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBe(18);
  });

  test('should subtract two numbers', (): void => {
    const rawInput: rawInput = { a: numA, b: numB, action: Action.Subtract };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBe(-4);
  });

  test('should multiply two numbers', (): void => {
    const rawInput: rawInput = { a: numA, b: numB, action: Action.Multiply };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBe(77);
  });

  test('should divide two numbers', (): void => {
    const rawInput: rawInput = { a: numA, b: numB, action: Action.Divide };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBe(0.6363636363636364);
  });

  test('should exponentiate two numbers', (): void => {
    const rawInput: rawInput = {
      a: numA,
      b: numB,
      action: Action.Exponentiate,
    };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBe(1977326743);
  });

  test('should return null for invalid action', (): void => {
    const rawInput: rawInput = { a: numA, b: numB, action: 'invalidAction' };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', (): void => {
    const rawInput: rawInput = { a: 'invalidNumber', b: 3, action: Action.Add };
    const result: number | null = simpleCalculator(rawInput);
    expect(result).toBeNull();
  });
});
