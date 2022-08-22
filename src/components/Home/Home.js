import React from "react";
import ProductCard from "../Product/ProductCard";
import classes from "./Home.module.css";
import HomeCarousel from "./HomeCarousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductRating from "../Product/ProductRating";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <div className={classes.sliderContainer}>
          <HomeCarousel />
        </div>
      </div>
      <div className={classes.productGrid}>
        <div className={classes.row}>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <ProductCard
                  id="45876987"
                  title="Tommy Hilfiger Men's cap"
                  price={25.0}
                  image="https://m.media-amazon.com/images/I/71d6yvxaHWL._AC_UX679_.jpg"
                  rating={5}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className={classes.row}>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <ProductCard
                  id="45812354"
                  title="Apple AirPods Pro with MagSafe charging case (2021)"
                  price={205.0}
                  image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY218_.jpg"
                  rating={<ProductRating />}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className={classes.row}>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <ProductCard
                  id="45876987"
                  title="Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal"
                  price={59.99}
                  image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_UY218_.jpg"
                  rating={5}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className={classes.row}>
          <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <ProductCard
                  id="45876987"
                  title="D'Addario Bronze Strings"
                  price={7.7}
                  image="https://m.media-amazon.com/images/I/81nzPy5yOYL._AC_SX425_.jpg"
                  rating={5}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Home;
