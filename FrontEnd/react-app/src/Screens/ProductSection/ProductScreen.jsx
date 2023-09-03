import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../../Components/Rating";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function ProductCard(props) {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
        className="my-3 p-3 rounded"
      >
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.card_inner}>
          <Link to={`/product/${props.productDetails._id}`}>
            <Card.Img src={props.productDetails.image["url"]} variant="top"></Card.Img>

            <Card.Body>
              <Card.Title as="div" className={styles.card_title}>
                <strong>{props.productDetails.name}</strong>
              </Card.Title>
              <Card.Text as="div">
                <div><h4>{props.productDetails.price} INR</h4></div>
              </Card.Text>
              {/* <Card.Text as="div">
                <Rating value={props.productDetails.rating}></Rating>
              </Card.Text> */}
            </Card.Body>
          </Link>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
