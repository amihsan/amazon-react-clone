import Carousel from "react-bootstrap/Carousel";
import classes from "./HomeCarousel.module.css";

function HomeCarousel() {
  return (
    <Carousel
      indicators={false}
      prevIcon={
        <span
          aria-hidden="true"
          className={`carousel-control-prev-icon ${classes.prevIcon}`}
        />
      }
      nextIcon={
        <span
          aria-hidden="true"
          className={`carousel-control-next-icon ${classes.nextIcon}`}
        />
      }
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/711zgUD-7oL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61-GAtalKDL._SX3000_.jpg"
          alt="2nd slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61XoVYjDkGL._SX3000_.jpg"
          alt="3rd slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
          alt="4th slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
          alt="5th slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
