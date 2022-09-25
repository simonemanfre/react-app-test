import React from "react";

const Title = (props) => {
  const { size, className, tag, children } = props;

  const Tag = tag || "h2";

  const classNames = [];

  className && classNames.push(className);
  classNames.push("t-title");
  size && classNames.push(`t-title--${size}`);

  return <Tag className={classNames.join(" ")}>{children}</Tag>;
};

export default Title;
