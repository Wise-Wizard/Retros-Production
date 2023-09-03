import React, { useEffect } from "react";
// import { ORDER_PAY_RESET } from "../../Constants/orderConstants";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../../Actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Components/Error";
import Loader from "../../Components/LoaderComponent/Loader";
import "./OrderCard.css";

const OrderScreen = ({ match }) => {
  const { id } = useParams();
  const orderId = id;
  // const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  // const orderPay = useSelector((state) => state.orderPay);
  // const { loading: loadingPay, success: successpay } = orderPay;
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  // const successPaymentHandler = (paymentResult) => {
  //   console.log(paymentResult);
  //   dispatch(payOrder(orderId, paymentResult));
  // };

  return loading ? (
    <Loader />
  ) : error ? (
    <Error variant="danger">{error}</Error>
  ) : (
    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>Name: </strong>
              {order.User.name}
            </p>
            <p>
              <strong>Phone Number: </strong>
              {order.shippingAddress.phone}
            </p>
            <p>
              <strong>Email: </strong>
              {order.User.email}
            </p>
            <p>
              <strong>Address: </strong>
              {order.shippingAddress.address}&nbsp;
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}&nbsp;
            </p>
            {order.isDeliverd ? (
              <Error variant="success">Paid On {order.isDeliverd}</Error>
            ) : (
              <Error variant="danger">Not Delivered</Error>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method: </strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {order.isPaid ? (
              <Error variant="success">Paid On {order.paidAt}</Error>
            ) : (
              <Error variant="danger">Not Paid</Error>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Error>Your Cart is Empty</Error>
            ) : (
              <ListGroup variant="flush">
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image.url} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X INR {item.price} = INR {item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>INR {order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>INR {order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>INR {order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>INR {order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Error variant="danger">{error}</Error>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader />}
              {!sdkReady ? <Loader /> : null}
            </ListGroup.Item>
          )} */}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
