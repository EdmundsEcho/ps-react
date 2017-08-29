import React from 'react';
import Comp from 'ps-react/TextInputE';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <Comp
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
      />
    )
  }
}
