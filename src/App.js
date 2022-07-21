import Home from "./appPages/Home";
import Cart from "./appPages/Cart";
import Clothes from "./appPages/Clothes";
import Backpack from "./appPages/Backpack";
import Shoes from "./appPages/Shoes";
import Accessories from "./appPages/Accessories";
import Login from "./appPages/Login";
import Checkout from "./appPages/Checkout";
import Card from "./appPages/Card";
import Confirm from "./appPages/Confirm";
import Product from "./appPages/Product";

import "./App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return <div>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/clothes" component={Clothes} />
      <Route path="/backpack" component={Backpack} />
      <Route path="/shoes" component={Shoes} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/login" component={Login} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/card" component={Card} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/product" component={Product} />
    </Switch>
    </Router>
  </div>;
}

export default App;