import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 7, b: 11, action: Action.Add, expected: 18 },
  { a: 6, b: 3, action: Action.Subtract, expected: 3 },
  { a: 15, b: 5, action: Action.Subtract, expected: 10 },
  { a: 4, b: 2, action: Action.Multiply, expected: 8 },
  { a: 6, b: 4, action: Action.Multiply, expected: 24 },
  { a: 90, b: 10, action: Action.Divide, expected: 9 },
  { a: 25, b: 5, action: Action.Divide, expected: 5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 5, b: 3, action: 'InvalidAction', expected: null },
  { a: 'invalid', b: 3, action: Action.Add, expected: null },
];

interface ITestCases {
  a: number | string;
  b: number | string;
  action: Action | string;
  expected: number | null;
}

describe('simpleCalculator', (): void => {
  test('validation of expected results', (): void => {
    testCases.forEach(({ a, b, action, expected }: ITestCases): void => {
      const result: number | null = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});
