import React from 'react';
import PropTypes from 'prop-types';

/** Edmund's Label with the required field display, htmlFor and block styling */
function LabelE({htmlFor, label, required}) {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </label>
  )
}

LabelE.propTypes = {
/** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

/** Label text */
  label: PropTypes.string.isRequired,

/** Display asterisk after label if true */
  required: PropTypes.bool
};

export default LabelE;
