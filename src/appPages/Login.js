import React from "react";
import "./Login.css"
import {NavLink, Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <main>
                <div>
        <div className="container-fluid d-flex align-items-center" style={{backgroundImage: 'url("./images/nav_bar.PNG")'}} id="nav_bar">
          <nav className="navbar navbar-expand-sm">
            <nav className="navbar navbar-expand-sm">
              <div className="container-fluid justify-content-center" id={2}>
                <ul className="navbar-nav">
                  <NavLink className="navbar-brand" to="cart" id="cartIcon" style={{paddingRight: '23rem'}}>
                    <img src="./images/Shopping_cart.png" alt="cart" style={{width: '40px'}} />
                  </NavLink>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="backpack">Backpack</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="shoes">Shoes</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">LOGO</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="clothes">Clothes</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="accessories">Accessories</NavLink>
                  </li>
                  <NavLink className="navbar-brand" to="login" id="cartIcon" style={{paddingLeft: '23rem'}}>
                    <img src="./images/login_signin.png" alt="account" style={{width: '40px'}} />
                  </NavLink>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center" id="body">
          <div className="container d-flex flex-column justify-content-center" id="login">
            <div className="row d-flex justify-content-center" id="header">
              Login
            </div>
            <div className="row d-flex justify-content-start" id="username">
              Username or Email
              <input type="email" className="form-control" placeholder="Username or Email" id="textInput" />
            </div>
            <div className="row d-flex justify-content-start" id="username">
              Enter Password:
              <input type="password" className="form-control" placeholder="Username or Email" id="textInput" />
            </div>
            <div className="row d-flex justify-content-center">
              <NavLink to="/" className="btn" id="loginButton">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
            </main>
        )
    }
}

export default Login;