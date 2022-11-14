//import React from "react";
import { Carousel } from 'react-bootstrap';
import React, { Component } from "react";
import fies from '/bannerFies.png';
import live from '/bannerLive.jpg';
import nossa from '/bannerNossa.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
      <img
          className="d-block w-100"
          src={fies}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={10000}>
      <img
          className="d-block w-100"
          src={live}
          alt="Secund slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={10000}>
      <img
          className="d-block w-100"
          src={nossa}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;

