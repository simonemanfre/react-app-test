import React from "react";

import "./hero.scss";
import Symbol from "../../atoms/Symbol/Symbol";

import Container from "../../atoms/Container/Container";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

const Hero = ({ data }) => {
  return (
    <header className="c-hero">
      <Container className="c-hero__container">
        <Title tag="h1" size="1" className="c-hero__title">
          {data.title}
        </Title>

        <section className="c-hero__text">
          <p>{data.subtitle}</p>
        </section>

        <Button
          url={data.button.url}
          className="c-hero__button"
          text={data.button.text}
          icon="arrow"
        />
      </Container>
      <Symbol></Symbol>
    </header>
  );
};

export default Hero;
