import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const smoothies = [
  {
    id: 1,
    name: 'Copycat Orange Julius Smoothie',
    price: '₹235.00',
    image: 'k1.jpg'
  },
  {
    id: 2,
    name: 'Blueberry Kale Smoothie',
    price: '₹270.00',
    image: 'k2.jpg'
  },
  {
    id: 3,
    name: 'Cacao Almond Bliss Smoothie',
    price: '₹235.00',
    image: 'k3.jpg'
  },
  {
    id: 4,
    name: 'Green Pear Smoothie',
    price: '₹235.00',
    image: 'k4.jpg'
  },
  {
    id: 5,
    name: 'Emerald Smoothie (Green Smoothie)',
    price: '₹235.00',
    image: 'k5.jpg'
  },
  {
    id: 6,
    name: 'Pumpkin Banana Smoothie',
    price: '₹215.00',
    image: 'k6.jpg'
  },
  {
    id: 7,
    name: 'Pumpkin Banana Smoothie',
    price: '₹215.00',
    image: 'k7.jpg'
  },
  {
    id: 8,
    name: 'Pumpkin Banana Smoothie',
    price: '₹215.00',
    image: 'k8.jpg'
  },
  {
    id: 10,
    name: 'Pumpkin Banana Smoothie',
    price: '₹215.00',
    image: 'smoothie.jpg'
  },
  {
    id: 11,
    name: 'Pumpkin Banana Smoothie',
    price: '₹215.00',
    image: 'k10.jpg'
  }
];

const SmoothiesForKids = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="container mx-auto p-2">
      {/* Title Section with a link to Home */}
      <div className="flex justify-start mb-2">
        <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
          Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up">
        Smoothies for Kids
      </h1>

      {/* Smoothie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {smoothies.map((smoothie) => (
          <div
            key={smoothie.id}
            className="bg-white shadow-lg rounded-lg p-4"
            data-aos="fade-up"
            data-aos-delay={`${smoothie.id * 100}`} // Delay based on the smoothie id
          >
            <img
              src={smoothie.image}
              alt={smoothie.name}
              className="w-full h-72 object-cover rounded-t-lg mb-4"
              data-aos="zoom-in"
            />
            <h2 className="text-lg font-semibold mb-2 text-center" data-aos="fade-up">
              {smoothie.name}
            </h2>
            <p className="text-lg text-red-500 mb-4 text-center" data-aos="fade-up">
              {smoothie.price}
            </p>
            <div className="flex items-center justify-center mb-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-md p-1 text-center mr-4"
              />
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md" data-aos="fade-up">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Banner Section */}
      <ProductBanner />
    </div>
  );
};

export default SmoothiesForKids;
