import React from 'react';
import PropTypes from 'prop-types';

const iconObjectList = {
  home: {
    format: "data",
    title: "home",
    viewBox: "0 0 32 32",
    height: "32",
    width: "32",
    path: "M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"
  },
  help: {
    format: "data",
    title: "help",
    viewBox: "0 0 32 32",
    height: "16",
    width: "16",
    path: "M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"
  },



};

const Icon = props => {
  return (
    <div>
      <svg height={iconObjectList[props.iconName].height}
        viewBox={iconObjectList[props.iconName].viewBox}
        width={iconObjectList[props.iconName].width}
        xmlns="http://www.w3.org/2000/svg">

        <path d={iconObjectList[props.iconName].path}/>
      </svg>
    </div>
  );
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;
