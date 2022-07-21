import React from "react";
import "./Home.css";
import {Link, NavLink} from "react-router-dom";

class Home extends React.Component {
    render(){
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
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./images/firstpage_background2.png" alt="image1" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src="./images/firstpage_background3.png" alt="image2" className="d-block" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        <div className="container-fluid d-flex flex-column" id="summerSale">
          <div className="summerHeader">
            <h1 className="summerText">
              SUMMER
            </h1>
          </div>
          <div className="saleHeader">
            <h1 className="saleText">
              SALE
            </h1>
          </div>
          <div className="container-fluid d-flex justify-content-center" id="saleItem">
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes11.JPG" className="saleShoes" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes7.JPG" className="saleShoes" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes8.JPG" className="saleShoes" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="product">
                <img src="./images/shoes4.JPG" className="saleShoes" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex" id="trendingSale">
          <div className="col-6" id="trending">
            <h1 id="trendingText">
              TRENDING<br />TRENDING<br />TRENDING
            </h1>
          </div>
          <div className="col-6" id="picture">
            <NavLink to="product">
              <img src="./images/shoes9.JPG" className="trendingShoes" />
            </NavLink>
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

export default Home;