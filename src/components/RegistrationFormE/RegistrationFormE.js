import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. This could have been
called a container because we host state here.  In that case, we
would make the component "dumb" by limiting it to the html presentation
code. */
class RegistrationFormE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };
  }

  // this single handler handles two fields using the event.target to
  // differentiate. This explains why we have the name property on the
  // the text input component.  He uses the name to set the associated
  // value in state
  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  // Returns a number from 0-100 that represents the password quality.
  // For now, algorithm just uses password lenght.  Also, no matter what
  // the parent of PasswordInput (this component) needs to know the quality
  // value.
  //
  // This is a relatively complex component BUT only accepts three props.
  //
  passwordQuality(password) {
    if (!password) return null;
    if (password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  }

  validate({email, password}) {
    const errors = {};
    const {minPasswordLength} = this.props;

    if (!email) errors.email = 'Email required.';
    if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  // callback handlers for submit
  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  // render: paint  using a mix or props and state
  render()  {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;

    return (
      submitted ?
      <h2>{this.props.confirmationMessage}</h2> :
      <div>
        <form>
          <TextInput
            htmlId="registration-form-email"
            name="email"
            value={email}
            onChange={this.onChange}
            label="Email"
            error={errors.email}
            required />

          <PasswordInput
            htmlId="registration-form-password"
            name="password"
            value={password}
            onChange={this.onChange}
            quality={this.passwordQuality(password)}
            maxLength={50}
            error={errors.password}
            showVisibilityToggle
            required />

          <input type="submit" value="Register" onClick={this.onSubmit} />
        </form>
      </div>
    )
  }
}

// The organism's API is simple... this despite this component
// being quite comlicated.
RegistrationFormE.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when the form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
}

RegistrationFormE.defaultProps = {
  confirmationMessage: "Thank you!",
  minPasswordLength: 8
};

export default RegistrationFormE;
