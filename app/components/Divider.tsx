import React from 'react';

const Divider = ({
  thickness = '1px',
  color = '#b0b0b0',
  margin = '10px 0',
  style = 'solid',
  width = '100%',
}) => {
  // Define the styles for the divider
  const dividerStyle = {
    border: 'none',
    borderTop: `${thickness} ${style} ${color}`,
    margin,
    width,
  };

  return <hr style={dividerStyle} />;
};

export default Divider;
