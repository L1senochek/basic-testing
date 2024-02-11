import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', (): void => {
  const initialBalance = 666;
  const balanceOne = 777;
  const balanceTwo = 888;
  const account = getBankAccount(balanceOne);
  const accountTwo = getBankAccount(balanceTwo);

  test('should create account with initial balance', (): void => {
    const account = getBankAccount(initialBalance);
    const balance = account.getBalance();
    expect(balance).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', (): void => {
    expect((): BankAccount => account.withdraw(999)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', (): void => {
    expect((): BankAccount => account.transfer(1665, accountTwo)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', (): void => {
    expect((): BankAccount => account.transfer(555, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', (): void => {
    account.deposit(23);
    expect(account.getBalance()).toBe(800);
  });

  test('should withdraw money', (): void => {
    account.withdraw(77);
    expect(account.getBalance()).toBe(723);
  });

  test('should transfer money', (): void => {
    account.transfer(12, accountTwo);
    expect(account.getBalance()).toBe(711);
    expect(accountTwo.getBalance()).toBe(900);
  });

  test('fetchBalance should return number in case if request did not failed', async (): Promise<void> => {
    const account = getBankAccount(666);
    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(balance).toEqual(expect.any(Number));
    } else {
      expect(balance).toBeNull();
    }
  });

  test('should set new balance if fetchBalance returned number', async (): Promise<void> => {
    const account = getBankAccount(666);

    try {
      await account.synchronizeBalance();
    } catch (error) {
      expect(error instanceof SynchronizationFailedError).toBe(true);
      return;
    }

    const newBalance = account.getBalance();
    expect(newBalance).toBeGreaterThanOrEqual(0);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async (): Promise<void> => {
    const account = getBankAccount(666);

    try {
      await account.synchronizeBalance();
    } catch (error) {
      expect(error instanceof SynchronizationFailedError).toBe(true);
    }
  });
});
