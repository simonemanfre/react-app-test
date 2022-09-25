import React from "react";

import "./link.scss";

import Icon from "../Icon/Icon";

const Link = (props) => {
  const { tag, url, text, icon, className } = props;

  const Tag = tag || "a";

  let classNames = [];
  className && classNames.push(className);
  classNames.push("c-link");

  return (
    <Tag href={url} className={classNames.join(" ")}>
      {text}
      {icon && <Icon icon={icon} />}
    </Tag>
  );
};

export default Link;
