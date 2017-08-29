import React from 'react';
import Comp from 'ps-react/TextInputE';

/** A required field with a hint */
export default class ExampleRequired extends React.Component {
  // Note how we wrap the TextInputE class with the class we are defining here
  // (ExampleRequired)
  render() {
    return (
      <Comp
        name={'field_name'}
        label={'field_name'}
        placeholder={'Put text here'}
        required={true}
      />
    )
  }
}
