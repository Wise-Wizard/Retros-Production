import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Form,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

// import Rating from "../../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import productDetailsAction from "../../Actions/productDetailsAction";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  addFavorite,
  deleteFavourite,
  getFavourites,
} from "../../Actions/favouritesAction";

function ProductPage() {
  const { id } = useParams();
  const [QTY, setQTY] = useState(1);
  const [isFav, setIsFav] = useState(null);
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.productDetails);
  const { loading, error, product } = singleProduct;
  const favProducts = useSelector((state) => state.userFavourites);
  const { userFav } = favProducts;

  useEffect(() => {
    dispatch(productDetailsAction(id));
    dispatch(getFavourites());
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    if (userFav && userFav.favourites.includes(id)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [userFav, id]);

  const handleFavorites = () => {
    if (isFav) {
      dispatch(deleteFavourite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Row>
          <Col md={6}>
            {product.image && (
              <Image src={product.image.url} alt={product.name} fluid />
            )}
          </Col>
          <Col md={3} className="product-details-col">
            <ListGroup className="product-details-list">
              <ListGroupItem className="product-details-item custom-dark-bg">
                <h2 className="product-name">{product.name}</h2>
              </ListGroupItem>
              <ListGroupItem className="product-details-item custom-light-bg">
                <h5 className="product-price">Price: {product.price} INR</h5>
              </ListGroupItem>
              <ListGroupItem className="product-details-item custom-dark-bg">
                <p className="product-description">{product.description}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3} style={{ marginTop: "20px" }}>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>
                    <h3>Status:</h3>
                  </Col>
                  <Col>
                    <h3>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </h3>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem variant="primary">
                <div class="text-center">
                  <Link to={`/cart/${id}?Quantity=${QTY}`}>
                    <button className="batman">
                      <span>
                        <h5>Add to Cart</h5>
                      </span>
                    </button>
                  </Link>
                  <FavoriteIcon
                    fontSize="large"
                    className={isFav ? "beatingHeart" : ""}
                    style={{
                      color: isFav ? "#ff1493" : "rgba(0, 0, 0, 0.2)",
                      animation: isFav ? "heartBeat 1.2s infinite" : "none",
                    }}
                    onClick={handleFavorites}
                  />
                </div>
              </ListGroupItem>
              {product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>
                      <h3>Quantity:</h3>
                    </Col>
                    <Col>
                      {" "}
                      <Form.Control
                        as="select"
                        value={QTY}
                        onChange={(e) => {
                          setQTY(e.target.value);
                        }}
                        size="sm"
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductPage;
