import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlassWhiskey, faChild, faBlender, faBowlFood, faInfoCircle, 
  faPhoneAlt, faGavel, faShieldAlt, faUndoAlt, faTruck, 
  faMapMarkerAlt, faPhone, faEnvelope, faClock 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Correct imports for social media icons

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="/logo1.png" // Adjust the path as needed
            alt="Bites & Fusion Logo"
            className="h-16"
          />
          <p className="text-sm">
            At Bites and Fusion, we bring together the best of global flavors
            and local ingredients to create drinks that are fresh, healthy, and
            delicious.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-bold text-black">Quick Links</h4> {/* Updated for bold and black color */}
          <ul className="space-y-1">
            <li>
              <a href="#juices" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faGlassWhiskey} className="mr-2" /> Juices
              </a>
            </li>
            <li>
              <a href="#healthy-kids" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faChild} className="mr-2" /> Healthy Kids
              </a>
            </li>
            <li>
              <a href="#smoothies" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faBlender} className="mr-2" /> Smoothies
              </a>
            </li>
            <li>
              <a href="#special-bowl" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faBowlFood} className="mr-2" /> Special Bowl
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Contact Us
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faGavel} className="mr-2" /> Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#refund-policy" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faUndoAlt} className="mr-2" /> Cancellation and Refund
              </a>
            </li>
            <li>
              <a href="#delivery-policy" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faTruck} className="mr-2" /> Shipping and Delivery Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-bold text-black">Opening Hours</h4> {/* Updated for bold and black color */}
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 mr-2" /> Sr no
            Sr.no.36/2 HΝο.166,Near Mahaganesh Nagari,
            Keshav Nager Mundhwa 411036.          </p>
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-orange-500 mr-2" /> +91 79722
            39800
          </p>
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 mr-2" /> rekha@bitesandfusion.in
          </p>
          <p className="text-sm flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-2" /> Early sunrise
            by 7 AM – Dawn to Dusk by 9 PM
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-orange-100 mt-6 py-4 text-sm flex justify-between items-center px-6">
        {/* Move copyright text slightly to the right */}
        <p className="text-center mr-4">
          © 2024 Bites and Fusion. Developed by{" "}
          <a
            href="https://www.kaitsolution.com/"
            className="text-orange-500 font-semibold hover:underline"
          >
            KA It Software Solution
          </a>
        </p>
        <div className="flex justify-end space-x-4 mr-4"> {/* Move social media icons a bit to the left */}
          {/* Facebook Icon with Blue background */}
          <a href="https://www.facebook.com/profile.php?id=61566853419921&mibextid=LQQJ4d&rdid=334R7nS7FYFV2ZGF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FiqUqq8TYkhJzU4NS%2F%3Fmibextid%3DLQQJ4d" className="flex items-center justify-center bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          {/* Instagram Icon with Shiny Pink background */}
          <a href="https://www.instagram.com/bitesfusion.in/profilecard/?igsh=MTNjc2hnZ2N2bDJ1aA%3D%3D" className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-full p-3 hover:from-pink-600 hover:to-pink-800">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
