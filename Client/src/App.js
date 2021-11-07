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
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;