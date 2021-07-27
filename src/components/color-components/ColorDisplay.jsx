import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        background,
        width: '100rem',
        height: '100rem'
      }}
    ></div>
  );
};

ColorDisplay.propTypes = {
  background: PropTypes.string.isRequired,
};

export default ColorDisplay;
