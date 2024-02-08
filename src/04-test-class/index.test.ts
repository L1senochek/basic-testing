// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  const initialBalance = 666;
  const balanceOne = 777;
  const balanceTwo = 888;
  const account = getBankAccount(balanceOne);
  const accountTwo = getBankAccount(balanceTwo);

  test('should create account with initial balance', () => {
    const account = getBankAccount(initialBalance);
    const balance = account.getBalance();
    expect(balance).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(999)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => account.transfer(1665, accountTwo)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(555, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    account.deposit(23);
    expect(account.getBalance()).toBe(800);
  });

  test('should withdraw money', () => {
    account.withdraw(77);
    expect(account.getBalance()).toBe(723);
  });

  test('should transfer money', () => {
    account.transfer(12, accountTwo);
    expect(account.getBalance()).toBe(711);
    expect(accountTwo.getBalance()).toBe(900);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
