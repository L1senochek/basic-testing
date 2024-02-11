import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const linkedList = [1, 2, 3];
    const result = generateLinkedList(linkedList);

    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: null,
            next: null,
          },
        },
      },
    };

    expect(result).toStrictEqual(expected);
  });

  test('should generate linked list from values 2', () => {
    const linkedList = ['a', 'b', 'c'];
    const result = generateLinkedList(linkedList);

    expect(result).toMatchSnapshot();
  });
});
