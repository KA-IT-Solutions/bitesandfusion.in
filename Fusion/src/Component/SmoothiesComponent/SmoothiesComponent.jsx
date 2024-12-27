import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const smoothies = [
  {
    id: 1,
    name: 'Almond Butter & Banana Smoothie',
    price: 285.00,
    imageUrl: 's1.jpg',
  },
  {
    id: 2,
    name: 'Strawberry-Banana Protein Smoothie',
    price: 250.00,
    imageUrl: 's2.jpg',
  },
  {
    id: 3,
    name: 'Chocolate Banana Protein Smoothie (Vegan)',
    price: 250.00,
    imageUrl: 's3.jpg',
  },
  {
    id: 4,
    name: 'Anti-Inflammatory Cherry and Spinach Smoothie',
    price: 250.00,
    imageUrl: 's4.jpg',
  },
  {
    id: 5,
    name: 'Spinach & Avocado Smoothie',
    price: 285.00,
    imageUrl: 's5.jpg',
  },
  {
    id: 6,
    name: 'Berry Kefir Smoothie with Nuts',
    price: 285.00,
    imageUrl: 's6.jpg',
  },
  {
    id: 7,
    name: 'Berry Kefir Smoothie with Nuts',
    price: 285.00,
    imageUrl: 's7.jpg',
  },
  {
    id: 8,
    name: 'Berry Kefir Smoothie with Nuts',
    price: 285.00,
    imageUrl: 's8.jpg',
  },
  {
    id: 9,
    name: 'Berry Kefir Smoothie with Nuts',
    price: 285.00,
    imageUrl: 's9.jpg',
  }
];

const SmoothiesComponent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="container mx-auto px-2">
      {/* Title Section with a link to Home */}
      <div className="flex justify-start mb-2">
        <Link to="/" className="text-xl  text-orange-500 hover:text-orange-700">
          Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center my-4" data-aos="fade-up">Smoothies</h1>

      {/* Smoothie List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {smoothies.map((smoothie) => (
          <div
            key={smoothie.id}
            className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            data-aos="fade-up" // Add fade-up animation
            data-aos-delay={`${smoothie.id * 100}`} // Delay based on ID for staggered effect
          >
            <img
              src={smoothie.imageUrl}
              alt={smoothie.name}
              className="w-full h-64 object-cover"
              data-aos="zoom-in" // Add zoom-in effect for image
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{smoothie.name}</h2>
              <p className="text-red-500 mt-2">₹{smoothie.price.toFixed(2)}</p>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border rounded w-16 px-2 py-1 mr-2 text-center"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded" data-aos="fade-up">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Banner Section */}
      <ProductBanner />
    </div>
  );
};

export default SmoothiesComponent;
