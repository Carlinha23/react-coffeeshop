const unroll = require('./unroll');

describe('unroll', () => {
  test('unrolls a 4x4 matrix correctly', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  test('unrolls a 3x3 matrix correctly', () => {
    const smallerSquare = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    const result = unroll(smallerSquare);
    expect(result).toEqual(['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']);
  });

  test('unrolls a 2x2 matrix correctly', () => {
    const smallSquare = [
      [1, 2],
      [3, 4]
    ];
    const result = unroll(smallSquare);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  test('unrolls a 1x1 matrix correctly', () => {
    const singleElementSquare = [
      [1]
    ];
    const result = unroll(singleElementSquare);
    expect(result).toEqual([1]);
  });

  test('unrolls an empty matrix correctly', () => {
    const emptySquare = [];
    const result = unroll(emptySquare);
    expect(result).toEqual([]);
  });

  test('unrolls a 5x5 matrix correctly', () => {
    const largeSquare = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    const result = unroll(largeSquare);
    expect(result).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });
});
