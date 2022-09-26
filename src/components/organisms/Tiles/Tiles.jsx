import React from "react";

import "./tiles.scss";
import Symbol from "../../atoms/Symbol/Symbol";

import Container from "../../atoms/Container/Container";
import Title from "../../atoms/Title/Title";
import Tile from "../../molecules/Tile/Tile";

const Tiles = ({ data }) => {
  return (
    <section className="c-tiles">
      <header className="c-tiles__header l-container">
        <Title tag="h2" size="2" className="c-tiles__title">
          {data.title}
        </Title>
        <p>{data.subtitle}</p>
        <Symbol></Symbol>
      </header>
      <Container tag="ul" className="c-tiles__content">
        {data.items.map((item, index) => (
          <Tile key={index} item={item} />
        ))}
      </Container>
    </section>
  );
};

export default Tiles;
