import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInputE';

/** Password input with integrated label, quality tips, and show password toggle.
 Pattern: specialization of the TextInput. We wrap TextInput with an atom that
fits for what we need in a password.  This is composition and not inheritence. */
class PasswordInputE extends React.Component {
  // Note: we are using a class-based component because we have some state (not
  // a function component.
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  // using es2005 class property
  // Notes: showPassword is set using ? t : f
  //        prevents browser defaults for this event
  toggleShowPassword = event => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  render() {
    // destructure props...
    // Note: Assignment of props versus state
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
    const {showPassword } = this.state;

    // TextInput uses <div> so we must use children for EyeIcon
    // We gave it an optional children props ref just for this reason
    // "this" being <EyeIcon />
    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...props}
      >
        {
          showVisibilityToggle &&
          <a
            href="#"
            onClick={this.toggleShowPassword}
            style={{ marginLeft: 5 }}
          >
            <EyeIcon />
          </a>
        }
        {
          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />
        }
        </TextInput>
      );
        } // end render
        } // end class

        PasswordInputE.propTypes = {
          /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
          htmlId: PropTypes.string.isRequired,

          /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
          name: PropTypes.string.isRequired,

          /** Password value */
          value: PropTypes.any,

          /** Input label */
          label: PropTypes.string.isRequired,

          /** Input type */
          type: PropTypes.oneOf(['text', 'number', 'password']),

          /** Mark label with asterisk if set to true */
          required: PropTypes.bool,

          /** Function to call onChange */
          onChange: PropTypes.func.isRequired,

          /** Max password length */
          maxLength: PropTypes.number,

          /** Placeholder to display when empty */
          placeholder: PropTypes.string,

          /** Set to true to show the toggle for displaying the currently entered password */
          showVisibilityToggle: PropTypes.bool,

          /** Display password quality visually using a ProgressBar; accepts values 0-100 */
          quality: PropTypes.number,

          /** Validation error to display */
          error: PropTypes.string
        };

  PasswordInputE.defaultProps = {
    maxLength: 50,
    showVisibilityToggle: false,
    label: 'Password'
  };

  export default PasswordInputE;
