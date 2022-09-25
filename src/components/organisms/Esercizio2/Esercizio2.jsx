import React from "react";

import "./esercizio2.scss";

import Container from "../../atoms/Container/Container";
import Title from "../../atoms/Title/Title";
import Tile from "../../molecules/Tile/Tile";

const Esercizio4 = (props) => {
  return (
    <section className="c-tiles">
      <header className="c-tiles__header l-container">
        <Title tag="h2" size="2" className="c-tiles__title">
          I nostri valori
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          omnis numquam adipisci itaque blanditiis ex aliquid porro earum
          tenetur ipsa et hic reprehenderit quas, qui id error dignissimos
          dolorem quasi accusantium. Aperiam voluptate pariatur animi sed ea
          quod autem! Delectus?
        </p>
      </header>
      <Container tag="ul" className="c-tiles__content">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </Container>
    </section>
  );
};

export default Esercizio4;
