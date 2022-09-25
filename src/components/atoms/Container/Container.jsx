import React from "react";

const Container = (props) => {
  const { children, className, tag } = props;

  const Tag = tag || "div";

  const classNames = [];

  className && classNames.push(className);
  classNames.push("l-container");

  return <Tag className={classNames.join(" ")}>{children}</Tag>;
};

export default Container;
