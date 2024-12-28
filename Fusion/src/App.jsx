import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Juices from "./Component/Juices/Juices";
import SmoothiesForKids from "./Component/SmoothiesForKids/SmoothiesForKids";
import SmoothiesComponent from "./Component/SmoothiesComponent/SmoothiesComponent";
import SpecialBowlComponent from "./Component/SpecialBowlComponent/SpecialBowlComponent";
import TermsAndConditions from "./Component/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import CancellationAndRefundPolicy from "./Component/CancellationAndRefundPolicy/CancellationAndRefundPolicy";
import ShippingAndDeliveryPolicy from "./Component/ShippingAndDeliveryPolicy/ShippingAndDeliveryPolicy";
import AboutUs from "./Component/AboutUs/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/juices" element={<Juices />} />
        <Route path="/healthy-kids" element={<SmoothiesForKids />} />
        <Route path="/smoothies" element={<SmoothiesComponent />}/>
        <Route path="/bowl" element={<SpecialBowlComponent />}/>
        <Route path="/terms" element={<TermsAndConditions />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/refund-policy" element={<CancellationAndRefundPolicy />}/>
        <Route path="/delivery-policy" element={<ShippingAndDeliveryPolicy />}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
