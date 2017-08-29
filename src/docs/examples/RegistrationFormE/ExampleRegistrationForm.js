import React from 'react';
import Comp from 'ps-react/RegistrationFormE';

export default class ExampleRegistrationForm extends React.Component {
  onSubmit = (user) => {
    // 2.The component will return the user object.  We are passing the user
    // object to the console in this case.
    console.log(user);
  }

  // 1. pass it a property for onSubmit
  render() {
    return <Comp onSubmit={this.onSubmit} />
  }
}
