import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInputE from './PasswordInputE';
import {shallow} from 'enzyme'; // versus mount which includes children

// Our component is supposed to toggle the input type
test('toggles input type when show/hide password is clicked', () => {
  const wrapper = shallow(<PasswordInputE
    htmlId="test"
    name="test"
    value=""
    onChange={() => {}}
    showVisibilityToggle />
  );

  // Password input should have a type of password initially
  expect(wrapper.find({type: 'password'})).toHaveLength(1);
  expect(wrapper.find({type: 'text'})).toHaveLength(0);

  // use enzyme to find an element in the DOM and simulate the click
  wrapper.find('a').simulate('click');

  // Now... password input should have a type of text after clicking toggle
  expect(wrapper.find({type: 'password'})).toHaveLength(0);
  expect(wrapper.find({type: 'text'})).toHaveLength(1);

});

test('hides password quality by default', () => {
  // create a tree; serialize it using JSON
  const tree = renderer.create(<PasswordInputE
    htmlId="test"
    name="test"
    onChange={() => {}}
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
  // what to expect
  // First time we run the test: it will pass
  // Subsequent times, it will compare with the first snapshot
  // Sources of changes: styles... does it matter?
  //
  // We can update the test at any time to reset the comparitor.
});
