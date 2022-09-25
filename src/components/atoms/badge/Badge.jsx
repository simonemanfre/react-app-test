import React from "react";

import "./badge.scss";

const Badge = (props) => {
  const { text, className } = props;

  let classnames = [];
  className && classnames.push(className);
  classnames.push("c-badge");

  return <span className={classnames.join(" ")}>{text}</span>;
};

export default Badge;
