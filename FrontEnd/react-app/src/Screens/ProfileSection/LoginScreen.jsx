import React from "react";
import FormContainer from "../../Components/Form";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/userAction.js";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation().search;
  const Navigate = useNavigate();

  const redirect = location ? location.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userInfo) {
      Navigate(redirect);
    }
  }, [userInfo, Navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <FormContainer>
          <div className="login">
            <Form onSubmit={submitHandler}>
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
              <Button type="submit" className="loginButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Login
              </Button>
              <Row className="justify-content-md-center">
                <Col>
                  <h3>New Customer?</h3>
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    <h4>Register</h4>
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
export default LoginScreen;
