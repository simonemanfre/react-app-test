import React from "react";

import "./button.scss";

import Icon from "../Icon/Icon";

const Button = (props) => {
  const { url, text, icon, secondary, className } = props;

  let classNames = [];
  className && classNames.push(className);
  classNames.push("c-button");
  secondary && classNames.push("c-button--secondary");

  return (
    <a href={url} className={classNames.join(" ")}>
      {text}
      {icon && <Icon icon={icon} />}
    </a>
  );
};

export default Button;
