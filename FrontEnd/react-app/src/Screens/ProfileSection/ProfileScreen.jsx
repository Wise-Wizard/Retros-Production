import React from "react";
import FormContainer from "../../Components/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../Actions/userAction.js";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userProfile);

  const { loading, error, userProfile } = userDetails;
  const updateUserInfo = useSelector((state) => state.userUpdateProfile);
  const { success } = updateUserInfo;
  if (success) {
    console.log("hello");
  }
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!userInfo) {
      Navigate("/login");
    } else {
      if (!userProfile) {
        dispatch(getUser("profile"));
      } else {
        setName(userProfile.name);
        setEmail(userProfile.email);
      }
    }
  }, [userInfo, Navigate, userProfile, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: userProfile._id, name, email, password }));
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
              <Button type="submit" className="loginButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Update
              </Button>
            </Form>
          </div>
        </FormContainer>
      )}
    </>
  );
}
export default ProfileScreen;
