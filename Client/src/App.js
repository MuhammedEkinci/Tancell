import React from "react";
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//pages 
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
//components
import PageNavBar from "./components/PageNaveBar";
import Footer from "./components/Footer";
import ProductType from "./pages/ProductType";
import DetailedProductPage from "./pages/DetailedProductPage";

function App() {
  return (
      <div>
        <Router basename="/">
          <PageNavBar />
          <Switch>
            <Route exact path={["/","/homepage"]}>
              <HomePage />
            </Route>
            <Route exact path="/products" component={Products} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products/:category" component={ProductType} />
            <Route exact path="/view-product/:productId" component={DetailedProductPage}/>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;