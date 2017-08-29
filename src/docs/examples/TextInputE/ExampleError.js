import React from 'react';
import Comp from 'ps-react/TextInputE';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <Comp
        htmlId="example-required"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    )
  }
}
