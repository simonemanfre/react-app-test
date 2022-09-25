import React from "react";

import "./button.scss";

const Button = (props) => {
  const { url, text, secondary, className } = props;

  let classNames = [];
  className && classNames.push(className);
  classNames.push("c-button");
  secondary && classNames.push("c-button--secondary");

  return (
    <a href={url} className={classNames.join(" ")}>
      {text}
    </a>
  );
};

export default Button;
