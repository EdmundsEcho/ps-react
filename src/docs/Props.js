import React from 'react';
import PropTypes from 'prop-types';

const Props = ({properties}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(properties).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{properties[key].description}</td>
              <td>{properties[key].type.name}</td>
              <td>{properties[key].defaultValue && properties[key].defaultValue.value}</td>
              <td>{properties[key].required && "X"}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  properties: PropTypes.object.isRequired
};

export default Props;
