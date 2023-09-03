import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart } from "../../Actions/cartAction";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { id } = useParams();
  const Quantity = useLocation().search;
  const Navigate = useNavigate();
  const qty = Number(Quantity.split("=")[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  function checkout() {
    Navigate(`/login?redirect=/shipping`);
  }
  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div>
              {" "}
              <h1>Your Cart is Empty!</h1>
              <h3>
                <Link to="/">Go Back</Link>
              </h3>
            </div>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem className="cart-item">
                  <Row className="align-items-center">
                    <Col xs={6} md={2}>
                      <Image
                        src={item.image.url}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col xs={6} md={3}>
                      <Link to={`/product/${item.product}`}>
                        <h4>{item.name}</h4>
                      </Link>
                    </Col>
                    <Col xs={12} md={2}>
                      <h4>{item.price} INR</h4>
                    </Col>
                    <Col xs={6} md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                        size="medium"
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col xs={6} md={3}>
                      <DeleteIcon
                        fontSize="large"
                        style={{ color: "#8B0000" }}
                        onClick={() => removeFromCartHandler(item.product)}
                      />
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>
                  Total Amount: INR
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h3>
                <h2>
                  ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  Products
                </h2>
              </ListGroupItem>
              <div class="text-center" style={{ padding: "15px" }}>
                <button
                  className="batman"
                  disabled={cartItems.length === 0}
                  onClick={checkout}
                >
                  <h3>
                    <span>Checkout</span>
                  </h3>
                </button>
              </div>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
