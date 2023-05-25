import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import {  useNavigate } from "react-router-dom";



export default function Header() {
  const users = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user")); 
  const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-light bg-light" style={{display:'flex',justifyContent:'space-between'}}>
      <a className="navbar-brand" href="/" style={{marginLeft:'250px'}}>
        Counter
      </a>
      
      

      {
        
        users ? 
        <Dropdown style={{marginRight:"250px"}} > 
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {
          user.userName.toUpperCase()
        }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profil</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ayarlar</Dropdown.Item>
        <Dropdown.Item href="/" onClick={(e) => {localStorage.removeItem("user")}}>Çıkış Yap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>: null
      }

      {
        
        users ?null :
        
        

        <Button variant="outline-dark" style={{marginRight:"250px",width:'90px'}} onClick={ (e) => {navigate("/login")} }>
          Giriş Yap
          </Button>
          
          }
          
    </nav>
  );
}
