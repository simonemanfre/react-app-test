import React from "react";

import "./esercizio4.scss";

import Container from "../../atoms/Container/Container";
import Button from "../../atoms/button/Button";
import Card from "../../molecules/Card/Card";

const Esercizio4 = (props) => {
  return (
    <section className="c-cards">
      <Container tag="ul" className="c-cards__content">
        <Card />
        <Card />
        <Card />
      </Container>

      <footer className="c-cards__footer l-container">
        <Button secondary url="#" text="Vedi tutto" />
      </footer>
    </section>
  );
};

export default Esercizio4;
