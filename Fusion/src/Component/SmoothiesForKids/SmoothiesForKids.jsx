// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS CSS
// import ProductBanner from '../Home/ProductBanner';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const smoothies = [
//   {
//     id: 1,
//     name: 'Copycat Orange Julius Smoothie',
//     price: '₹199.00',
//     image: 'k1.jpg'
//   },
//   {
//     id: 2,
//     name: 'Blueberry Kale Smoothie',
//     price: '₹200.00',
//     image: 'k2.jpg'
//   },
//   {
//     id: 3,
//     name: 'Cacao Almond Bliss Smoothie',
//     price: '₹200.00',
//     image: 'k3.jpg'
//   },
//   // {
//   //   id: 4,
//   //   name: 'Green Pear Smoothie',
//   //   price: '₹235.00',
//   //   image: 'k4.jpg'
//   // },
//   {
//     id: 5,
//     name: 'Emerald Smoothie (Green Smoothie)',
//     price: '₹199.00',
//     image: 'k5.jpg'
//   },
//   {
//     id: 6,
//     name: 'Pumpkin Banana Smoothie',
//     price: '₹180.00',
//     image: 'k6.jpg'
//   },
//   {
//     id: 7,
//     name: 'Blueberry Smoothie',
//     price: '₹200.00',
//     image: 'k7.jpg'
//   },
//   {
//     id: 8,
//     name: 'Pineapple Coconut Smoothie',
//     price: '₹199.00',
//     image: 'k8.jpg'
//   },
//   {
//     id: 10,
//     name: 'Chocolate Banana Smoothie',
//     price: '₹180.00',
//     image: 'smoothie.jpg'
//   },
//   {
//     id: 11,
//     name: 'Orange Creamsicle Smoothie',
//     price: '₹200.00',
//     image: 'k10.jpg'
//   }
// ];

// const SmoothiesForKids = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS on component mount
//   }, []);

//   // Function to handle booking via WhatsApp
//   const handleBookNow = (smoothieName, price, quantity) => {
//     const message = `Hi, I would like to book the following smoothie:\n\nName: ${smoothieName}\nPrice: ${price}\nQuantity: ${quantity}`;
//     const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-2">
//       {/* Title Section with a link to Home */}
//       <div className="flex justify-start mb-2">
//         <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
//           Home
//         </Link>
//       </div>

//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up">
//         Smoothies for Kids
//       </h1>

//       {/* Smoothie List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {smoothies.map((smoothie) => (
//           <div
//             key={smoothie.id}
//             className="bg-white shadow-lg rounded-lg p-4"
//             data-aos="fade-up"
//             data-aos-delay={`${smoothie.id * 100}`} // Delay based on the smoothie id
//           >
//             <img
//               src={smoothie.image}
//               alt={smoothie.name}
//               className="w-full h-72 object-cover rounded-t-lg mb-4"
//               data-aos="zoom-in"
//             />
//             <h2 className="text-lg font-semibold mb-2 text-center" data-aos="fade-up">
//               {smoothie.name}
//             </h2>
//             <p className="text-lg text-red-500 mb-4 text-center" data-aos="fade-up">
//               {smoothie.price}
//             </p>
//             <div className="flex items-center justify-center mb-4">
//               <input
//                 type="number"
//                 min="1"
//                 defaultValue="1"
//                 className="w-16 border rounded-md p-1 text-center mr-4"
//                 id={`quantity-${smoothie.id}`} // Add ID for quantity field
//               />
//               <button
//                 className="bg-orange-500 text-white py-2 px-4 rounded-md"
//                 data-aos="fade-up"
//                 onClick={() => {
//                   const quantity = document.getElementById(`quantity-${smoothie.id}`).value;
//                   handleBookNow(smoothie.name, smoothie.price, quantity);
//                 }}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Product Banner Section */}
//       <ProductBanner />
//     </div>
//   );
// };

// export default SmoothiesForKids;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const smoothies = [
  {
    id: 1,
    name: 'Copycat Orange Julius Smoothie',
    price: '₹199.00',
    image: 'k1.jpg',
    ingredients: ['Orange', 'Banana', 'Sugar', 'Ice']
  },
  {
    id: 2,
    name: 'Blueberry Kale Smoothie',
    price: '₹200.00',
    image: 'k2.jpg',
    ingredients: ['Blueberry', 'Kale', 'Almond Milk', 'Honey']
  },
  {
    id: 3,
    name: 'Cacao Almond Bliss Smoothie',
    price: '₹200.00',
    image: 'k3.jpg',
    ingredients: ['Cacao', 'Almond', 'Banana', 'Almond Milk']
  },
  {
    id: 5,
    name: 'Emerald Smoothie (Green Smoothie)',
    price: '₹199.00',
    image: 'k5.jpg',
    ingredients: ['Spinach', 'Avocado', 'Coconut Water', 'Lime']
  },
  {
    id: 6,
    name: 'Pumpkin Banana Smoothie',
    price: '₹180.00',
    image: 'k6.jpg',
    ingredients: ['Pumpkin', 'Banana', 'Cinnamon', 'Almond Milk']
  },
  {
    id: 7,
    name: 'Blueberry Smoothie',
    price: '₹200.00',
    image: 'k7.jpg',
    ingredients: ['Blueberry', 'Yogurt', 'Honey', 'Ice']
  },
  {
    id: 8,
    name: 'Pineapple Coconut Smoothie',
    price: '₹199.00',
    image: 'k8.jpg',
    ingredients: ['Pineapple', 'Coconut', 'Yogurt', 'Honey']
  },
  {
    id: 10,
    name: 'Chocolate Banana Smoothie',
    price: '₹180.00',
    image: 'smoothie.jpg',
    ingredients: ['Chocolate', 'Banana', 'Almond Milk', 'Cinnamon']
  },
  {
    id: 11,
    name: 'Orange Creamsicle Smoothie',
    price: '₹200.00',
    image: 'k10.jpg',
    ingredients: ['Orange', 'Vanilla', 'Yogurt', 'Honey']
  }
];

const SmoothiesForKids = () => {
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  // Function to handle booking via WhatsApp
  const handleBookNow = (smoothieName, price, quantity) => {
    const message = `Hi, I would like to book the following smoothie:\n\nName: ${smoothieName}\nPrice: ${price}\nQuantity: ${quantity}`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  // Function to handle showing the selected smoothie info
  const handleShowIngredients = (smoothie) => {
    setSelectedSmoothie(smoothie);
  };

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
                id={`quantity-${smoothie.id}`} // Add ID for quantity field
              />
              <button
                className="bg-orange-500 text-white px-2 py-2 rounded mr-2"
                data-aos="fade-up"
                onClick={() => {
                  const quantity = document.getElementById(`quantity-${smoothie.id}`).value;
                  handleBookNow(smoothie.name, smoothie.price, quantity);
                }}
              >
                Book Now
              </button>

              {/* Ingredient Button */}
              <button
                className="bg-green-500 text-white py-2 px-2 rounded-md"
                data-aos="fade-up"
                onClick={() => handleShowIngredients(smoothie)}
              >
                Ingredients
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal or Product Info */}
      {selectedSmoothie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-80">
            <h2 className="text-2xl font-semibold mb-4">{selectedSmoothie.name}</h2>
            <img
              src={selectedSmoothie.image}
              alt={selectedSmoothie.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 mb-4">
              {selectedSmoothie.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={() => setSelectedSmoothie(null)}
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

export default SmoothiesForKids;
