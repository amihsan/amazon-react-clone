import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import classes from "./ProductCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import ProductRating from "./ProductRating";

function ProductCard({ id, title, image, price, rating }) {
  const [isHovering, setIsHovering] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const handlerMouseEnter = () => {
    setIsHovering(true);
  };
  const handlerMouseOut = () => {
    setIsHovering(false);
  };
  const entering = (e) => {
    // e.children[0].style.borderTopColor = "#FFCA2C";
    e.children[1].style.backgroundColor = "#ffc107";
    e.children[1].style.color = "black";
  };

  return (
    <Card
      style={{ width: "22.6rem" }}
      className={classes.productCard}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseOut}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ProductRating />
          <p className={classes.price}>
            <small>€</small>
            <strong>{price}</strong>
          </p>
        </Card.Text>
        <div className={classes.productCardFooter}>
          <Button variant="warning" size="sm" onClick={addToBasket}>
            Add to Basket
          </Button>
          {isHovering && (
            <OverlayTrigger
              key="top"
              placement="top"
              onEntering={entering}
              overlay={
                <Tooltip>
                  <strong>See more </strong>.
                </Tooltip>
              }
            >
              <Button variant="warning" size="lg" onClick={handleShow}>
                <div className={classes.seeMore}></div>
              </Button>
            </OverlayTrigger>
          )}
          <Modal
            size="lg"
            centered
            scrollable={true}
            restoreFocus={false}
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Product Details Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Features:</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It
              </p>
            </Modal.Body>

            <Modal.Footer className={classes.footer}>
              <Button variant="warning" size="sm" onClick={addToBasket}>
                Add to Basket
              </Button>
              <Link to="/checkout">
                <Button variant="warning" size="sm" onClick={handleClose}>
                  Buy now
                </Button>
              </Link>
              <Button variant="warning" size="sm" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
