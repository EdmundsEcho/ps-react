import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

// test for function in progress bar
// getWidthAsPercentOfTotalWidth
describe('ProgressBar', () => {
  test('testWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    // pull with the width from the instance that was wrapped
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});

