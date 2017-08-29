import {getWidthAsPercentOfTotalWidth} from './percentUtils';

describe('getWidthAsPercentOfTotalWidth', () => {
  test('should return 250 with total = 500 and percent 50', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});
