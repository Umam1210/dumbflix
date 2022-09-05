import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import csstile from "./home2.module.css";
import dataFilm from "../../fakeData/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Details from "../../pages/Details";

function Home2() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataFilm);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div>
      <div style={{ width: "100%", background: "black", paddingTop: "30px" }}>
        <span
          style={{
            paddingTop: "30px",
            marginLeft: "15px",
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          TV Series
        </span>
        <Slider {...settings} className={csstile.main1}>
          {data.map((item) => {
            const { id, image, name, year } = item;
            return (
              <Col className={csstile.main2} key={id}>
                <div>
                  <img src={image} alt={name} />
                </div>
                <div className={csstile.main3}>
                  <span>{name}</span>
                  <span>{year}</span>
                </div>
              </Col>
            );
          })}
        </Slider>
      </div>
      <div style={{ width: "100%", background: "black", paddingTop: "30px" }}>
        <span
          style={{
            marginLeft: "15px",
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Movie
        </span>
        <Slider {...settings} className={csstile.main1}>
          {data.map((item, index) => {
            const { id, image, name, year } = item;
            return (
              <Col className={csstile.main2} key={index}>
                <Link to="/details">
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <div className={csstile.main3}>
                    <span>{name}</span>
                    <span>{year}</span>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Home2;
