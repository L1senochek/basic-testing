import { mockOne, mockTwo, mockThree } from './index';

jest.mock('./index', () => {
  return {
    ...jest.requireActual<typeof import('./index')>('./index'),
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', (): void => {
  const foo = 'foo';
  const bar = 'bar';
  const baz = 'baz';

  afterAll((): void => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', (): void => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    mockOne();
    mockTwo();
    mockThree();

    expect(consoleLogSpy).not.toHaveBeenCalledWith(foo);
    expect(consoleLogSpy).not.toHaveBeenCalledWith(bar);
    expect(consoleLogSpy).not.toHaveBeenCalledWith(baz);

    consoleLogSpy.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
  });
});
