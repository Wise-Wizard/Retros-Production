// import React from "react";
// import { Form } from "react-bootstrap";
// function FormComponent() {
//   return (
//     <div class="main">
//       <input type="checkbox" id="chk" aria-hidden="true"></input>

//       <div class="login">
//         <Form>
//           <Form.Label for="chk" aria-hidden="true">
//             Log in
//           </Form.Label>
//           <Form.Control
//             class="input"
//             type="email"
//             name="email"
//             placeholder="Email"
//             required=""
//           ></Form.Control>
//           <Form.Control
//             class="input"
//             type="password"
//             name="pswd"
//             placeholder="Password"
//             required=""
//           ></Form.Control>
//           <button>Log in</button>
//         </Form>
//       </div>

//       <div class="register">
//         <Form>
//           <label for="chk" aria-hidden="true">
//             Register
//           </label>
//           <input
//             class="input"
//             type="text"
//             name="txt"
//             placeholder="Username"
//             required=""
//           ></input>
//           <input
//             class="input"
//             type="email"
//             name="email"
//             placeholder="Email"
//             required=""
//           ></input>
//           <input
//             class="input"
//             type="password"
//             name="pswd"
//             placeholder="Password"
//             required=""
//           ></input>
//           <button>Register</button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default FormComponent;

import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <div>
        <Row className="justfy-content-md-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FormContainer;
