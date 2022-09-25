import React from "react";
import { useState } from "react";

import items from "../../../data/esercizio3.json";

import Container from "../../atoms/Container/Container";
import AccordionItem from "../../molecules/AccordionItem/AcordionItem";

function Accordion(props) {
  const [active, setActive] = useState("0");

  const handleToggle = (index) => {
    if (active === index) {
      return setActive("0");
    }
    setActive(index);
  };

  return (
    <Container>
      <ul className="c-accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            onToggle={() => handleToggle(index)}
            active={active === index}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Accordion;
