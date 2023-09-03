import React from "react";
import FormContainer from "../../Components/Form";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Actions/userAction.js";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const location = useLocation().search;
  const Navigate = useNavigate();

  const redirect = location ? location.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      Navigate(redirect);
    }
  }, [userInfo, Navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return setMessage("Passwords do not match");
    dispatch(registerUser(name, email, password));
  };

  return (
    <>
     {message && <Error variant='danger'>{message}</Error>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <FormContainer>
          <div className="login">
            <Form onSubmit={submitHandler}>
              <Form.Group controlId={name}>
                <Form.FloatingLabel className="label">Name</Form.FloatingLabel>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Enter Name:"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId={email}>
                <Form.FloatingLabel className="label">
                  Email ID
                </Form.FloatingLabel>
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Enter Email ID:"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId={password}>
                <Form.FloatingLabel className="label">
                  Passsword
                </Form.FloatingLabel>
                <Form.Control
                  className="input"
                  type="password"
                  placeholder="Enter Password:"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId={confirmPassword}>
                <Form.FloatingLabel className="label">
                  Confirm Passsword
                </Form.FloatingLabel>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password:"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="loginButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Register
              </Button>
              <Row className="justify-content-md-center">
                <Col>
                  <h3>Have an Account?</h3>
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  >
                    <h4>Login</h4>
                  </Link>
                </Col>
              </Row>
            </Form>
          </div>
        </FormContainer>
      )}
    </>
  );
}
export default RegisterScreen;
