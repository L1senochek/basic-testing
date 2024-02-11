import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
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

  test('should throw error with default message if message is not provided', (): void => {
    const defaultMessage = 'Oops!';
    try {
      throwError();
      expect(true).toBe(false);
    } catch (error: unknown) {
      error instanceof Error
        ? expect(error.message).toBe(defaultMessage)
        : expect(true).toBe(false);
    }
  });
});

describe('throwCustomError', (): void => {
  test('should throw custom error', (): void => {
    const customError = 'This is my awesome custom error!';
    try {
      throwCustomError();
      expect(true).toBe(false);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MyAwesomeError);
      error instanceof Error
        ? expect(error.message).toBe(customError)
        : expect(true).toBe(false);
    }
  });
});

describe('rejectCustomError', (): void => {
  test('should reject custom error', async (): Promise<void> => {
    const customError = 'This is my awesome custom error!';
    try {
      await rejectCustomError();
      expect(true).toBe(false);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(MyAwesomeError);
      error instanceof Error
        ? expect(error.message).toBe(customError)
        : expect(true).toBe(false);
    }
  });
});
