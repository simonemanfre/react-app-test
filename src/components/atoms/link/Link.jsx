import React from "react";

import "./link.scss";

const Link = (props) => {
  const { url, text, tag, className } = props;

  const Tag = tag || "a";

  let classNames = [];
  className && classNames.push(className);
  classNames.push("c-link");

  return (
    <Tag href={url} className={classNames.join(" ")}>
      {text}
    </Tag>
  );
};

export default Link;
