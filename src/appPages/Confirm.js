import React, {Component} from 'react';
import "./Confirm.css";
import {NavLink, Link} from "react-router-dom";


class Confirm extends Component{
  constructor(props) {
    super(props)
    
    this.state = {msg : "Send confirmation to Email"}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({msg : "Confirmation Sent"})
  }
    render() {
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
        <div className="container-fluid" id="mainBody">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="progress" style={{width: '40%', marginTop: '2.5rem'}}>
              <div className="progress-bar bg-success" style={{width: '100%'}} />
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
          <div className="row" id="thank">
            Thank you for ordering with us !!
          </div>
          <div className="row">
            <button className="btn" id="sendEmail" onClick={this.handleClick}>{this.state.msg}</button>
          </div>
          <div className="row" id="suggestion">
            Suggestions
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-3 d-flex justify-content-center">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
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

export default Confirm;