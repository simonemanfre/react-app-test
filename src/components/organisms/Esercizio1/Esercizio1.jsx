import React from "react";

import "./esercizio1.scss";

import Container from "../../atoms/Container/Container";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

const Esercizio1 = (props) => {
  return (
    <header className="c-hero">
      <Container className="c-hero__container">
        <Title tag="h1" size="1" className="c-hero__title">
          Lorem ipsum dolor sit amet.
        </Title>

        <section className="c-hero__text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            eaque repellat quae voluptatibus dignissimos accusamus dolor nisi
            iure facilis doloribus!
          </p>
        </section>

        <Button
          url="#"
          className="c-hero__button"
          text="Approfondisci"
          icon="arrow"
        />
      </Container>
    </header>
  );
};

export default Esercizio1;
