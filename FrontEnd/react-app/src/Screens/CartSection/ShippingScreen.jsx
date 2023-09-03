import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../Components/Form";
import { saveShippingAddress } from "../../Actions/cartAction";
//import CheckoutStep from "../components/shared/CheckoutStep";

const ShippingScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);

  const Navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(
      saveShippingAddress({ phone, address, city, postalcode, country })
    );
    Navigate("/payment");
  };

  return (
    <>
      {/* <CheckoutStep step1 step2 /> */}
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="phone">
            <Form.Label className="label">Phone Number</Form.Label>
            <Form.Control
              className="input"
              type="number"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label className="label">Address</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label className="label">City</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalcode">
            <Form.Label className="label">Postal Code</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter postalcode"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label className="label">Country</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="loginButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span> Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ShippingScreen;
