import React, { useState } from "react";
import { Container, Form, Button,Row,Col,Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../axios/index";



// import "../css/logIn.css";



const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
    <Container className="container">
    <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form className="mt-100 "
            onSubmit={(e) => {
              e.preventDefault();

              Login(formData)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data.user));
                  navigate("/");
                })
                .catch((err) => {
                  console.log(err.response.data.message);
                });
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                className="input"
              />
            </Form.Group><br/>
            <Alert >
          This is a  alert—check it out!
        </Alert>
            <Form.Group className="d-grid">
              <Button type="submit" variant="primary" className="btn" size="sm">
                Sign In
              </Button><br/>
              <Form.Text className="text-center mt-2">
                Don't have an account? <Link to="/sigin" >Kayıt Ol</Link>
              </Form.Text>
            </Form.Group>
          </Form>
          </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LogIn;