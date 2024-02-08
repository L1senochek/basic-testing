// Uncomment the code below and write your tests
import {
  throwError,
  // throwCustomError,
  resolveValue,
  // MyAwesomeError,
  // rejectCustomError,
} from './index';

describe('resolveValue', (): void => {
  test('should resolve provided value', async (): Promise<void> => {
    const test = 'test123';
    const result = await resolveValue(test);
    expect(result).toBe(test);
  });
});

describe('throwError', (): void => {
  test('should throw error with provided message', (): void => {
    const errorMessage = 'error';
    try {
      throwError(errorMessage);
      expect(true).toBe(false);
    } catch (error: unknown) {
      error instanceof Error
        ? expect(error.message).toBe(errorMessage)
        : expect(true).toBe(false);
    }
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
  });
});
