import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../Actions/cartAction";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    Navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    Navigate("/placeorder");
  };

  return (
    <>
      <h1>Payment Method</h1>
      <Alert
        variant="info"
        className="custom-payment-message"
      >
        <h5>Payment Update:</h5>
        <p>
          <strong>
            {" "}
            Currently, we do not have a payment gateway integrated on our
            website. However, we have streamlined the process to ensure a smooth
            checkout experience for you. Here's what you need to know:
          </strong>
        </p>
        <ul>
          <li>
            <strong>Confirmation Process:</strong> To place your order, simply
            click on the "Continue" button below. You will be directed to the
            orders page, where you can click on the "Place Order" button to
            confirm your address and finalize your order.
          </li>
          <li>
            <strong>Personal Assistance:</strong> Our dedicated team will
            personally reach out to you within 2-3 working days to finalize the
            payment process.
          </li>
          <li>
            <strong>Order Tracking:</strong> Once your order is shipped, you
            will have access to real-time updates on its status through your
            profile screen.
          </li>
        </ul>
        <h5>Apologies for the inconvenience:</h5>
        <p>
          <strong>
            {" "}
            We apologize for any inconvenience caused and appreciate your
            patience as we work towards integrating a seamless payment gateway
            for future orders.
          </strong>
        </p>
      </Alert>
      <Form onSubmit={submitHandler} className="payment-form">
        <Form.Group>
          <Form.Label className="label">
            <Form.Check
              type="radio"
              value="COD"
              id="COD"
              name="Payment"
              defaultChecked
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
              disabled={true}
            ></Form.Check>
            &nbsp; COD Order
          </Form.Label>
        </Form.Group>
        <Button
          style={{ width: "300px" }}
          type="submit"
          className="loginButton"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span> Continue
        </Button>
      </Form>
    </>
  );
}

export default Payment;
