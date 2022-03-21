import React from "react";
import "./Intro.css";

const Intro = ({ title, description }) => {
  return (
    <section className="intro">
      <div className="container">
        <h1 className="intro__title">{title}</h1>
        <p className="intro__description">{description}</p>
      </div>
    </section>
  );
};

export default Intro;
