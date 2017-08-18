import React from 'react';
import PropTypes from 'prop-types';
import '../prism';
import {PrismCode} from 'react-prism';
import 'prismjs/themes/prism-okaidia.css';

// how to color the syntax is a separate step
// defined in a css file.  The file file is referenced
// in the docs/index.js file
class CodeExample extends React.Component {

  render() {
    return (
      // ref is used to access the DOM element
      <pre ref={ref => { this.element = ref }}>
        <PrismCode className="language-jsx">>
          {this.props.children}
        </PrismCode>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
