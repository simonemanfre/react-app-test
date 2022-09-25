import React from "react";

import "./accordion-item.scss";

import Icon from "../../atoms/Icon/Icon";
import Title from "../../atoms/Title/Title";

function AccordionItem({ item, onToggle, active }) {
  return (
    <li className={`c-accordion-item${active ? " u-is-open" : ""}`}>
      <header className="c-accordion-item__header" onClick={onToggle}>
        <Title tag="h4" size="3" className="c-accordion-item__title">
          {item.title}
        </Title>
        <Icon icon="arrow"></Icon>
      </header>
      <div className="c-accordion-item__content">{item.text}</div>
    </li>
  );
}

export default AccordionItem;
