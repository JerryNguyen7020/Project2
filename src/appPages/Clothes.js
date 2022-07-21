import React from "react";
import "./Clothes.css";
import {NavLink, Link} from "react-router-dom";

class Clothes extends React.Component{
    render() {
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
        <div className="container-fluid d-flex" id="mainBody">
          <div className="col-3" id="filter">
            <div className="container-fluid d-flex flex-column justify-content-center" style={{marginTop: '7rem'}}>
              <p id="filterHeader">Fitlers</p>
              <table id="tblType">
                <tbody><tr>
                    <td><input id="Backpack" type="checkbox" defaultValue={1} /><label htmlFor="Backpack">Backpack</label></td>
                  </tr>
                  <tr>
                    <td><input id="Shoes" type="checkbox" defaultValue={2} /><label htmlFor="Shoes">Shoes</label></td>
                  </tr>
                  <tr>
                    <td><input id="Clothes" type="checkbox" defaultValue={3} /><label htmlFor="Clothes">Clothes</label></td>
                  </tr>
                  <tr>
                    <td><input id="Accessories" type="checkbox" defaultValue={4} /><label htmlFor="Accessories">Accessories</label></td>
                  </tr>
                </tbody></table>
              <p id="separate">_______________</p>
              <table id="tblGender">
                <tbody><tr>
                    <td><input id="Male" type="checkbox" defaultValue={1} /><label htmlFor="Male">Male</label></td>
                  </tr>
                  <tr>
                    <td><input id="Female" type="checkbox" defaultValue={2} /><label htmlFor="Female">Female</label></td>
                  </tr>
                  <tr>
                    <td><input id="Kids" type="checkbox" defaultValue={3} /><label htmlFor="Kids">Kids</label></td>
                  </tr>
                </tbody></table>
              <p id="separate">_______________</p>
              <table id="tblBrand">
                <tbody><tr>
                    <td><input id="Nike" type="checkbox" defaultValue={1} /><label htmlFor="Nike">Nike</label></td>
                  </tr>
                  <tr>
                    <td><input id="Adidas" type="checkbox" defaultValue={2} /><label htmlFor="Adidas">Adidas</label></td>
                  </tr>
                  <tr>
                    <td><input id="Under Armour" type="checkbox" defaultValue={3} /><label htmlFor="Under Armour">Under Armour</label></td>
                  </tr>
                  <tr>
                    <td><input id="Puma" type="checkbox" defaultValue={4} /><label htmlFor="Puma">Puma</label></td>
                  </tr>
                  <tr>
                    <td><input id="New Balance" type="checkbox" defaultValue={5} /><label htmlFor="New Balance">New Balance</label></td>
                  </tr>
                </tbody></table>
              <p id="separate">_______________</p>
              <table id="tblSize">
                <tbody><tr>
                    <th>
                    </th><td><input id={6} type="checkbox" defaultValue={1} /><label htmlFor={6}>6</label></td>
                    <th>
                    </th><td><input id="10.5" type="checkbox" defaultValue={10} /><label htmlFor="10.5">10.5</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id="6.5" type="checkbox" defaultValue={2} /><label htmlFor="6.5">6.5</label></td>
                    <th>
                    </th><td><input id={11} type="checkbox" defaultValue={11} /><label htmlFor={11}>11</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id={7} type="checkbox" defaultValue={3} /><label htmlFor={7}>7</label></td>
                    <th>
                    </th><td><input id="11.5" type="checkbox" defaultValue={12} /><label htmlFor="11.5">11.5</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id="7.5" type="checkbox" defaultValue={4} /><label htmlFor="7.5">7.5</label></td>
                    <th>
                    </th><td><input id={12} type="checkbox" defaultValue={13} /><label htmlFor={12}>12</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id={8} type="checkbox" defaultValue={5} /><label htmlFor={8}>8</label></td>
                    <th>
                    </th><td><input id={13} type="checkbox" defaultValue={14} /><label htmlFor={13}>13</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id="8.5" type="checkbox" defaultValue={6} /><label htmlFor="8.5">8.5</label></td>
                    <th>
                    </th><td><input id={14} type="checkbox" defaultValue={15} /><label htmlFor={14}>14</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id={9} type="checkbox" defaultValue={7} /><label htmlFor={9}>9</label></td>
                    <th>
                    </th><td><input id={15} type="checkbox" defaultValue={16} /><label htmlFor={15}>15</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id="9.5" type="checkbox" defaultValue={8} /><label htmlFor="9.5">9.5</label></td>
                    <th>
                    </th><td><input id={16} type="checkbox" defaultValue={17} /><label htmlFor={16}>16</label></td>
                  </tr>
                  <tr>
                    <th>
                    </th><td><input id={10} type="checkbox" defaultValue={9} /><label htmlFor={10}>10</label></td>
                  </tr>
                </tbody></table>
              <p id="separate">_______________</p>
              <table id="tblColor">
                <tbody><tr>
                    <td><input id="Red" type="checkbox" defaultValue={1} /><label htmlFor="Red">
                        <div style={{width: '1rem', height: '1rem', backgroundColor: 'red'}} />
                      </label></td>
                  </tr>
                  <tr>
                    <td><input id="Blue" type="checkbox" defaultValue={2} /><label htmlFor="Blue">
                        <div style={{width: '1rem', height: '1rem', backgroundColor: 'blue'}} />
                      </label></td>
                  </tr>
                  <tr>
                    <td><input id="White" type="checkbox" defaultValue={3} /><label htmlFor="White">
                        <div style={{width: '1rem', height: '1rem', backgroundColor: '#f8f8f8'}} />
                      </label></td>
                  </tr>
                  <tr>
                    <td><input id="Black" type="checkbox" defaultValue={3} /><label htmlFor="Black">
                        <div style={{width: '1rem', height: '1rem', backgroundColor: 'black'}} />
                      </label></td>
                  </tr>
                  <tr>
                    <td><input id="Pink" type="checkbox" defaultValue={3} /><label htmlFor="Pink">
                        <div style={{width: '1rem', height: '1rem', backgroundColor: '#ffc0cb'}} />
                      </label></td>
                  </tr>
                </tbody></table>
              <a href="#" className="btn" id="applyFilter">Apply</a>
            </div>
          </div>
          <div className="col-9 d-flex flex-column" style={{marginTop: '4rem'}}>
            <div className="row d-flex justify-content-center">
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
              <div className="col-4">
                <NavLink to="product">
                  <img src="./images/shoes11.JPG" id="pic" />
                </NavLink>
                <p id="namePrice">Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  $$$</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center" style={{marginTop: '1rem'}}>
              <ul className="pagination pagination-sm justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
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

export default Clothes;