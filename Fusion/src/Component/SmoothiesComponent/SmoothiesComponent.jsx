// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS CSS
// import ProductBanner from '../Home/ProductBanner';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const smoothies = [
//   {
//     id: 1,
//     name: 'Almond Butter & Banana Smoothie',
//     price: '₹ 200.00',
//     imageUrl: 's1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Strawberry-Banana Protein Smoothie',
//     price: '₹ 200.00',
//     imageUrl: 's2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Chocolate Banana Protein Smoothie (Vegan)',
//     price: '₹ 200.00',
//     imageUrl: 's3.jpg',
//   },
//   {
//     id: 5,
//     name: 'Spinach & Avocado Smoothie',
//     price: '₹ 200.00',
//     imageUrl: 's5.jpg',
//   },
//   {
//     id: 7,
//     name: 'Peanut Butter & Banana Smoothie',
//     price: '₹ 200.00',
//     imageUrl: 's7.jpg',
//   },
//   {
//     id: 8,
//     name: 'Purple Power Smoothie',
//     price: '₹ 285.00',
//     imageUrl: 's8.jpg',
//   },
//   {
//     id: 9,
//     name: 'Green Detox Smoothie',
//     price: '₹ 180.00',
//     imageUrl: 's9.jpg',
//   }
// ];

// const SmoothiesComponent = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS when the component mounts
//   }, []);

//   // Function to handle booking via WhatsApp
//   const handleBookNow = (smoothieName, price) => {
//     const numericPrice = parseFloat(price.replace('₹', '').trim());
//     const message = `Hi, I would like to book the following smoothie:\n\nName: ${smoothieName}\nPrice: ₹${numericPrice.toFixed(2)}.`;
//     const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <div className="container mx-auto px-2">
//       {/* Title Section with a link to Home */}
//       <div className="flex justify-start mb-2">
//         <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
//           Home
//         </Link>
//       </div>

//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center my-4" data-aos="fade-up">Smoothies</h1>

//       {/* Smoothie List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {smoothies.map((smoothie) => (
//           <div
//             key={smoothie.id}
//             className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//             data-aos="fade-up" // Add fade-up animation
//             data-aos-delay={`${smoothie.id * 100}`} // Delay based on ID for staggered effect
//           >
//             <img
//               src={smoothie.imageUrl}
//               alt={smoothie.name}
//               className="w-full h-64 object-cover"
//               data-aos="zoom-in" // Add zoom-in effect for image
//             />
//             <div className="p-4 text-center">
//               <h2 className="text-lg font-semibold">{smoothie.name}</h2>
//               <p className="text-red-500 mt-2">₹{parseFloat(smoothie.price.replace('₹', '').trim()).toFixed(2)}</p>
//               <div className="flex justify-center items-center mt-4">
//                 <input
//                   type="number"
//                   min="1"
//                   defaultValue="1"
//                   className="border rounded w-16 px-2 py-1 mr-2 text-center"
//                 />
//                 <button
//                   className="bg-orange-500 text-white px-4 py-2 rounded"
//                   onClick={() => handleBookNow(smoothie.name, smoothie.price)}
//                   data-aos="fade-up"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Product Banner Section */}
//       <ProductBanner />
//     </div>
//   );
// };

// export default SmoothiesComponent;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const smoothies = [
  {
    id: 1,
    name: 'Almond Butter & Banana Smoothie',
    price: '₹ 200.00',
    imageUrl: 's1.jpg',
    ingredients: ['Almond butter', 'Banana', 'Milk', 'Honey'], // Ingredients as an array
  },
  {
    id: 2,
    name: 'Strawberry-Banana Protein Smoothie',
    price: '₹ 200.00',
    imageUrl: 's2.jpg',
    ingredients: ['Strawberries', 'Banana', 'Protein powder', 'Milk'],
  },
  {
    id: 3,
    name: 'Chocolate Banana Protein Smoothie (Vegan)',
    price: '₹ 200.00',
    imageUrl: 's3.jpg',
    ingredients: ['Banana', 'Cocoa powder', 'Protein powder', 'Almond milk'],
  },
  {
    id: 5,
    name: 'Spinach & Avocado Smoothie',
    price: '₹ 200.00',
    imageUrl: 's5.jpg',
    ingredients: ['Spinach', 'Avocado', 'Banana', 'Apple juice'],
  },
  {
    id: 7,
    name: 'Peanut Butter & Banana Smoothie',
    price: '₹ 200.00',
    imageUrl: 's7.jpg',
    ingredients: ['Peanut butter', 'Banana', 'Milk', 'Honey'],
  },
  {
    id: 8,
    name: 'Purple Power Smoothie',
    price: '₹ 285.00',
    imageUrl: 's8.jpg',
    ingredients: ['Blueberries', 'Banana', 'Yogurt', 'Honey'],
  },
  {
    id: 9,
    name: 'Green Detox Smoothie',
    price: '₹ 180.00',
    imageUrl: 's9.jpg',
    ingredients: ['Kale', 'Apple', 'Banana', 'Lemon juice'],
  }
];

const SmoothiesComponent = () => {
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  // Function to handle booking via WhatsApp
  const handleBookNow = (smoothieName, price) => {
    const numericPrice = parseFloat(price.replace('₹', '').trim());
    const message = `Hi, I would like to book the following smoothie:\n\nName: ${smoothieName}\nPrice: ₹${numericPrice.toFixed(2)}.`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  // Function to handle showing ingredients
  const handleShowIngredients = (smoothie) => {
    setSelectedSmoothie(smoothie);
  };

  // Function to close ingredients modal
  const handleCloseIngredients = () => {
    setSelectedSmoothie(null);
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
              <p className="text-red-500 mt-2">₹{parseFloat(smoothie.price.replace('₹', '').trim()).toFixed(2)}</p>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border rounded w-16 px-2 py-1 mr-2 text-center"
                />
                <button
                  className="bg-orange-500 text-white px-2 py-2 rounded mr-2"
                  onClick={() => handleBookNow(smoothie.name, smoothie.price)}
                  data-aos="fade-up"
                >
                  Book Now
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-2 rounded"
                  onClick={() => handleShowIngredients(smoothie)}
                  data-aos="fade-up"
                >
                  Ingredients
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ingredients Modal */}
      {selectedSmoothie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">{selectedSmoothie.name}</h2>
            <img
              src={selectedSmoothie.imageUrl}
              alt={selectedSmoothie.name}
              className="w-full h-60 object-cover mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 mb-4">
              {selectedSmoothie.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
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

export default SmoothiesComponent;
