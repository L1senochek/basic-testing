import path from 'path';
import { doStuffByInterval, doStuffByTimeout, readFileAsynchronously } from '.';

jest.mock('path', () => {
  const actualPathModule = jest.requireActual('path');
  return {
    ...actualPathModule,
    join: jest.fn(),
  };
});

describe('doStuffByTimeout', () => {
  const timeout = 500;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, timeout);
    jest.advanceTimersByTime(timeout);

    expect(callback).toHaveBeenCalled();
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, timeout);
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(timeout);
    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  const interval = 500;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, interval);
    jest.advanceTimersByTime(interval);

    expect(callback).toHaveBeenCalledWith();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, interval);
    jest.advanceTimersByTime(interval);
    jest.advanceTimersByTime(interval);
    jest.advanceTimersByTime(interval);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  const pathToFile = 'pathToFile.ts';

  test('should call join with pathToFile', async () => {
    const joinSpy = jest.spyOn(path, 'join');
    const currentDir = path.dirname(require.resolve(__filename));

    await readFileAsynchronously(pathToFile);

    expect(joinSpy).toHaveBeenCalledWith(currentDir, pathToFile);
    joinSpy.mockRestore();
  });

  test('should return null if file does not exist', async () => {
    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
