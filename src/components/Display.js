import React from 'react';
import HorizontalNavList from './HorizontalNavList';
import PropTypes from 'prop-types';
import Alert from './Alert';
import IconView from './IconView';

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
    case "Alert":
      components = (
        <div>
          <Alert />
        </div>
      );
      break;
    case "Icon":
      components = (
        <div>
          <IconView />
        </div>
      );
      break;

    default:
      alert("NO MATCH!!");
  }
  return components;
}

Display.propTypes = {
  template: PropTypes.string.isRequired,
};

export default Display;
