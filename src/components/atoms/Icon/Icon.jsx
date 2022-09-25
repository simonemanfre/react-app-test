import React from "react";

function Icon(props) {
  return (
    <svg
      className={`icon icon-${props.icon}`}
      style={props.color && { fill: props.color }}
    >
      <use xlinkHref={`#icon-${props.icon}`} />
    </svg>
  );
}

export default Icon;
