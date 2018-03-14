import React from 'react';
import HorizontalNavList from '../components/HorizontalNavList';
import PropTypes from 'prop-types';

const Display = props => {

  var components = null;

  switch(props.template) {
    case "Navigation":
      components = (
        <div>
          <HorizontalNavList />
        </div>
      );
      break;
    case "Misc":
      components = (
        <div>
          No Misc Templates
        </div>
      );
      break;
    case "Forms":
      components = (
        <div>
          No Form Templates
        </div>
      );
      break;

    default:
      console.error("NO MATCH");
  }
  return components;
}

Display.propTypes = {
  template: PropTypes.string.isRequired,
};

export default Display;
