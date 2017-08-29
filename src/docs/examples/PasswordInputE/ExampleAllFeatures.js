import React from 'react';
import Comp from 'ps-react/PasswordInputE';

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  // uses class component to host just a little bit of state
  // ... password
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    // Note: better to avoid using arrow functions in render as we have here; it
    // impacts performance.  I'm not sure what the alternative is.
    return (
      <div>
        <Comp
          htmlId="password-input-example-all-features"
          name="password"
          onChange={ event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props} />
      </div>
    )
  }
}

export default ExampleAllFeatures;
