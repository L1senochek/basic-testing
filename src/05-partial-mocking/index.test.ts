import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

type Mock = {
  mockOne: jest.Mock<void, []>;
  mockTwo: jest.Mock<void, []>;
  mockThree: jest.Mock<void, []>;
  unmockedFunction: typeof unmockedFunction;
};

jest.mock('./index', (): Mock => {
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
  const stringNotMocked = 'I am not mocked';

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

  test('unmockedFunction should log into console', (): void => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    unmockedFunction();

    expect(consoleLogSpy).toHaveBeenCalledWith(stringNotMocked);

    consoleLogSpy.mockRestore();
  });
});
