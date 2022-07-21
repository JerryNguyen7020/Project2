import React from "react";
import "./Cart.css";
import {NavLink, Link} from "react-router-dom";

class Cart extends React.Component{
    render () {
        return (
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
                    <div className="container-fluid" id="middle">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div className="progress" style={{width: '40%', marginTop: '2.5rem'}}>
                        <div className="progress-bar bg-success" style={{width: '3%'}} />
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
                    <h1>Cart</h1>
                    <div className="row" id="headers">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        Product
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        Quantity
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        Price
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        Coupon
                        </div>
                    </div>
                    <div className="row" id="addedPro">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <a href="product.html">
                            <img src="./images/shoes12.JPG" id="product" />
                        </a>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="quantity">
                        #
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="price">
                        $$
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="coupon">
                        <input type="text" className="form-control" placeholder="Enter coupon" id="couponInput" />
                        <button className="btn" id="applyCoupon">Apply</button>
                        </div>
                    </div>
                    <div className="row" id="addedPro">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <a href="product.html">
                            <img src="./images/shoes7.JPG" id="product" />
                        </a>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="quantity">
                        #
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="price">
                        $$
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="price">
                        <div className="container d-flex flex-column justify-content-center" id="total">
                            <div className="row" id="tolPrice">
                            Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$
                            </div>
                            <div style={{marginTop: '3rem'}}>
                            <NavLink to="checkout" className="btn" id="conNavigation">Continue</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row" id="addedPro">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <a href="product.html">
                            <img src="./images/shoes14.JPG" id="product" />
                        </a>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="quantity">
                        #
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center" id="price">
                        $$
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

export default Cart;