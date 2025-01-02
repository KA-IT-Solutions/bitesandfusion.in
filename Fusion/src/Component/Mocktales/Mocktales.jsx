
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const mocktails = [
  {
    id: 1,
    name: 'Moheto Mojito',
    price: 99.00,
    imageUrl: 'm1.jpg',
    ingredients: ['Mint', 'Lime', 'Sugar', 'Soda']
  },
  {
    id: 2,
    name: 'Strawberry Mojito',
    price: 99.00,
    imageUrl: 'm2.jpg',
    ingredients: ['Strawberries', 'Mint', 'Lime', 'Sugar', 'Soda']
  },
  {
    id: 3,
    name: 'Blueberry Mojito',
    price: 99.00,
    imageUrl: 'm3.jpg',
    ingredients: ['Blueberries', 'Mint', 'Lime', 'Sugar', 'Soda']
  },
  {
    id: 5,
    name: 'Canbarry Mojito',
    price: 99.00,
    imageUrl: 'm5.jpg',
    ingredients: ['Cranberries', 'Mint', 'Lime', 'Sugar', 'Soda']
  },
  {
    id: 4,
    name: 'Lemon Mojito',
    price: 99.00,
    imageUrl: 'm4.jpg',
    ingredients: ['Lemon', 'Mint', 'Sugar', 'Soda']
  },
  {
    id: 6,
    name: 'WaterMelon Mojito',
    price: 99.00,
    imageUrl: 'm6.jpg',
    ingredients: ['Watermelon', 'Mint', 'Lime', 'Sugar', 'Soda']
  },
];

const Mocktales = () => {
  const [selectedMocktail, setSelectedMocktail] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  // Function to handle booking via WhatsApp
  const handleBookNow = (mocktailName, price, quantity) => {
    const message = `Hi, I would like to book the following mocktail:\n\nName: ${mocktailName}\nPrice: ₹${price}\nQuantity: ${quantity}`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleShowIngredients = (mocktail) => {
    setSelectedMocktail(mocktail);
  };

  const handleCloseIngredients = () => {
    setSelectedMocktail(null);
  };

  return (
    <div className="container mx-auto px-2">
      {/* Title Section with a link to Home */}
      <div className="flex justify-start mb-2">
        <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
          Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center my-4" data-aos="fade-up">
        Mocktails
      </h1>

      {/* Mocktails List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mocktails.map((mocktail) => (
          <div
            key={mocktail.id}
            className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            data-aos="fade-up" // Apply fade-up animation to each mocktail card
            data-aos-delay={`${mocktail.id * 100}`} // Stagger the animation by id
          >
            <img
              src={mocktail.imageUrl}
              alt={mocktail.name}
              className="w-full h-64 object-cover transition-transform transform hover:scale-105"
              data-aos="zoom-in" // Apply zoom-in animation to the image
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{mocktail.name}</h2>
              <p className="text-red-500 mt-2">₹{mocktail.price.toFixed(2)}</p>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border rounded w-16 px-2 py-1 mr-2 text-center"
                  id={`quantity-${mocktail.id}`} // Add ID for quantity input
                />
                <button
                  className="bg-orange-500 text-white px-2 py-2 rounded mr-2"
                  data-aos="fade-up"
                  onClick={() => {
                    const quantity = document.getElementById(`quantity-${mocktail.id}`).value;
                    handleBookNow(mocktail.name, mocktail.price, quantity);
                  }}
                >
                  Book Now
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  data-aos="fade-up"
                  onClick={() => handleShowIngredients(mocktail)}
                >
                  Ingredients
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Ingredients Modal */}
      {selectedMocktail && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{selectedMocktail.name}</h2>
            <img
              src={selectedMocktail.imageUrl}
              alt={selectedMocktail.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
              {selectedMocktail.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">{ingredient}</li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={handleCloseIngredients}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Product Banner Section */}
      <ProductBanner />
    </div>
  );
};

export default Mocktales;
