import React, { useState } from "react";
import { Container, Form, Button,  Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../axios/index";

const SigIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    
  });
  const submitForm = async (e) => {
    e.preventDefault();
  
    try {
      const res = await register(formData);
      if (res.status === 200) {
        
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              
              try {
                const res = await register(formData);
                
                if(res.status === 200){
                  
                  navigate("/login");
                }
                
              } catch (err) {
                console.log(err);
              }
            }}
            
            
          >
            
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
                type="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            
            
            <Form.Group className="d-grid">
              <Button variant="primary" type="submit" className="mt-4" onClick={submitForm}>
                <Link className="text-white text-decoration-none" >
                  Sign Up
                </Link>
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default SigIn;