import React from "react";

import "./cards.scss";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import Card from "../../molecules/Card/Card";

const Cards = ({ data }) => {
  return (
    <section className="c-cards">
      <Container tag="ul" className="c-cards__content">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>

      <footer className="c-cards__footer l-container">
        <Button secondary url="#" text="Vedi tutto" />
      </footer>
    </section>
  );
};

export default Cards;
