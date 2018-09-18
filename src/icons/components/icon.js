import React from 'react';

function Icon(props){
  const {
    color,
    size
  } = props;

  return(
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 48 48"
    >
      {props.children}
    </svg>
  )
}

export default Icon;
