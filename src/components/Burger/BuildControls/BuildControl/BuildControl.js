import React from 'react'

const BuildControl = (props) => {
  return (
    <div>
      <div>{props.label}</div>
      <button>Less</button>
      <button>More</button>
    </div>
  );
};

export default BuildControl;
