import React from "react";
import "./Card.css";
import {NavLink, Link} from "react-router-dom";

class Card extends React.Component{
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
        <div className="container-fluid" style={{backgroundImage: 'url("./images/card_background.jpg")'}} id="body">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="progress" style={{width: '40%', marginTop: '2.5rem'}}>
              <div className="progress-bar bg-success" style={{width: '66.6666666666666666666666666666666666666666666666666666666666666%'}} />
            </div>
            <p id="state">
              Cart
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Checkout
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              Card
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Confirm
            </p>
          </div>
          <div className="row d-flex justify-content-center align-items-center" style={{marginTop: '3rem'}}>
            <div className="col-7">
              <div className="container d-flex flex-column justify-content-center" id="leftCheckout">
                <div className="row">
                  <h1 id="header">
                    Card
                  </h1>
                </div>
                <div className="row" style={{marginTop: '2rem'}}>
                  <p id="name">
                    Name
                    <input type="text" className="form-control" placeholder="Name on card" id="Input" />
                  </p>
                </div>
                <div className="row" style={{marginTop: '2rem'}}>
                  <p id="address">
                    Address
                    <input type="text" className="form-control" placeholder="Card Number" id="Input" />
                  </p>
                </div>
                <div className="row" style={{marginTop: '2rem'}}>
                  <div className="col-6">
                    <p id="province">
                      Expiry date
                      <input type="text" className="form-control" placeholder="Enter date" id="smallInput" />
                    </p>
                  </div>
                </div>
                <div className="row" style={{marginTop: '2rem'}}>
                  <div className="col-6">
                    <p id="province">
                      CCV
                      <input type="text" className="form-control" placeholder="3 digit number" id="smallInput" />
                    </p>
                  </div>
                </div>
                <div className="row" id="nav">
                  <div className="col-6 d-flex justify-content-start">
                    <NavLink to="checkout" id="preNavigation">&lt; Previous </NavLink>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <NavLink to="confirm" className="btn" id="conNavigation">Order</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="container d-flex flex-column justify-content-center" id="rightCheckout">
                <div className="row" id="billingInfo">
                  Items
                </div>
                <div className="row" style={{marginTop: '1rem'}} id="billingInfo">
                  <div className="col-6 d-flex justify-content-start">
                    Product 1
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    $$
                  </div>
                </div>
                <div className="row" style={{marginTop: '1rem'}} id="billingInfo">
                  <div className="col-6 d-flex justify-content-start">
                    Product 2
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    $$
                  </div>
                </div>
                <div className="row" style={{marginTop: '1rem'}} id="billingInfo">
                  <div className="col-6 d-flex justify-content-start">
                    Product 3
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    $$
                  </div>
                </div>
                <div className="row d-flex justify-content-center" style={{marginTop: '1rem'}} id="billingInfo">
                  ______________________________________________________
                </div>
                <div className="row" style={{marginTop: '1rem'}} id="billingInfo">
                  <div className="col-6 d-flex justify-content-start">
                    Total
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    $$$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex" id="endOfPage">
          <div className="col-5" id="shopInfo">
            Address: 123 ABC Way, Ottawa, ON, <br />
            Canada, K3O 3L8 <br />
            Phone: 555-555-5555 <br />
            Open - Close: 8:00 - 21:00
          </div>
          <div className="col-4 d-flex flex-column" id="terms">
            <a href="#">Give us your feed back</a>
            <a href="#">Terms of Use</a>
            <a href="#">Terms of Sales</a>
          </div>
          <div className="col-3" id="follow">
            Follow us:
            <a href="#">
              <img src="./images/instagram.png" className="img" />
            </a>
            <a href="#">
              <img src="./images/twitter.png" className="img" />
            </a>
          </div>
        </div>
      </div>
            </main>
        )
    }
}

export default Card;