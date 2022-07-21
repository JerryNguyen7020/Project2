import React, {Component} from 'react';
import "./Product.css";
import {NavLink, Link} from "react-router-dom";

class Product extends Component {
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
                    <NavLink className="nav-link" to="accessories.html">Accessories</NavLink>
                  </li>
                  <NavLink className="navbar-brand" to="login.html" id="cartIcon" style={{paddingLeft: '23rem'}}>
                    <img src="./images/login_signin.png" alt="account" style={{width: '40px'}} />
                  </NavLink>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
        <div className="container-fluid d-flex" id="mainBody">
          <div className="col-5">
            <div className="container-fluid justify-content-center align-items-center d-flex">
              <img src="./images/shoes10.JPG" className="img" id="proImage" />
            </div>
          </div>
          <div className="col-7">
            <div className="container-fluid" id="productInfo">
              <h1 id="proName">Name Name Name Name</h1> <br />
              <s id="ori">$$$</s>
              <p id="sale">$$$</p>
              <p id="size">Size:
                <select className="form-select" id="numSize">
                  <option>6</option>
                  <option>6.5</option>
                  <option>7</option>
                  <option>7.5</option>
                  <option>8</option>
                  <option>8.5</option>
                  <option>9</option>
                  <option>9.5</option>
                  <option>10</option>
                  <option>10.5</option>
                  <option>11</option>
                  <option>11.5</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                </select>
              </p>
              <p id="color">
                Color:
                <button className="btn" style={{backgroundColor: 'red'}} id="colorBox" />
                <button className="btn" style={{backgroundColor: 'blue'}} id="colorBox" />
                <button className="btn" style={{backgroundColor: '#f8f8f8'}} id="colorBox" />
                <button className="btn" style={{backgroundColor: 'black'}} id="colorBox" />
                <button className="btn" style={{backgroundColor: '#FFC0CB'}} id="colorBox" />
              </p>
              <form action="/action_page.php">
                <label id="quantityLabel" htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min={1} max={20} />
              </form>
              <button className="btn" id="add">Add to Cart</button>
              <NavLink to="checkout" className="btn" id="buy">Buy Now</NavLink>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex flex-column" id="more">
          Maybe you also like
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="product ">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" id="morePro" />
              </NavLink>
            </div>
            <div className="col-3">
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

export default Product;