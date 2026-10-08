import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SinglePageHeader from "./components/SinglePageHeader";
import Home from "./pages/Home";
import FourZeroFour from "./pages/FourZeroFour";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import ShopDetails from "./pages/ShopDetails";
import Shop from "./pages/Shop";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <>
                <SinglePageHeader title="Shop" />
                <Shop />
              </>
            }
          />
          <Route
            path="/shopDetails"
            element={
              <>
                <SinglePageHeader title="Shop Details" />
                <ShopDetails />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <SinglePageHeader title="Cart" />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkOut"
            element={
              <>
                <SinglePageHeader title="Check Out" />
                <CheckOut />
              </>
            }
          />
          <Route
            path="/testimonial"
            element={
              <>
                <SinglePageHeader title="Testimonial" />
                <Testimonial />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SinglePageHeader title="Contact" />
                <Contact />
              </>
            }
          />
          <Route
            path="/404"
            element={
              <>
                <SinglePageHeader title="404" />
                <FourZeroFour />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
