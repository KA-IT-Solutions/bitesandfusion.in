// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import the AOS styles
// import ProductBanner from '../Home/ProductBanner';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// const products = [
//   {
//     id: 1,
//     name: 'Wheatgrass Pineapple',
//     price: '₹149.00',
//     image: 'j2.jpg'
//   },
//   {
//     id: 2,
//     name: 'Grasshopper',
//     price: '₹239.00',
//     image: 'j3.jpg'
//   },
//   {
//     id: 3,
//     name: 'Turmeric Tonic',
//     price: '₹203.00',
//     image: 'j4.jpg'
//   },
//   {
//     id: 4,
//     name: 'True love of greens',
//     price: '₹149.00',
//     image: 'j5.jpg'
//   },
 
//   {
//     id: 6,
//     name: 'Dry Fruit Boost',
//     price: '₹210.00',
//     image: 'j7.jpg'
//   },
//   {
//     id: 7,
//     name: 'Seed explorer',
//     price: '₹149.00',
//     image: 'j8.jpg'
//   },
//   {
//     id: 8,
//     name: 'Shoots & sprouts with greens',
//     price: '₹149.00',
//     image: 'j9.jpg'
//   },
//   {
//     id: 9,
//     name: 'Pineapple, Coconut Water, Lime, and Mint Detox Tonic',
//     price: '₹299.00',
//     image: 'j10.jpg'
//   },
//   {
//     id: 10,
//     name: 'Cucumber Coolers with Greens',
//     price: '₹149.00',
//     image: 'j11.jpg'
//   },
//   {
//     id: 12,
//     name: 'Mean Greens',
//     price: '₹149.00',
//     image: 'j13.jpg'
//   }
// ];

// const Juices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animation
//   }, []);

//   const handleBookNow = (productName) => {
//     const message = `Hi, I would like to book the product: ${productName}.`;
//     const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <div className="container mx-auto p-2">
//       {/* Title Section with a link to the Home page */}
//       <div className="flex justify-start mb-2">
//         <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
//           Home
//         </Link>
//       </div>

//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center mb-4">Juices</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-md p-4"
//             data-aos="fade-up" // Apply the fade-up animation
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
//             <p className="text-lg text-red-500 mb-4 text-center">{product.price}</p>
//             <div className="flex items-center justify-center mb-4">
//               <input
//                 type="number"
//                 min="1"
//                 defaultValue="1"
//                 className="w-16 border rounded-md p-1 text-center mr-4"
//               />
//               <button
//                 className="bg-orange-500 text-white py-2 px-4 rounded-md"
//                 onClick={() => handleBookNow(product.name)}
//               >
//                 Book now
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

// export default Juices;
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const products = [
  {
    id: 1,
    name: 'Wheatgrass Pineapple',
    price: '₹149.00',
    image: 'j2.jpg',
    ingredients: ['Wheatgrass', 'Pineapple', 'Lemon']
  },
  {
    id: 2,
    name: 'Grasshopper',
    price: '₹239.00',
    image: 'j3.jpg',
    ingredients: ['Spinach', 'Cucumber', 'Celery']
  },
  {
    id: 3,
    name: 'Turmeric Tonic',
    price: '₹203.00',
    image: 'j4.jpg',
    ingredients: ['Turmeric', 'Ginger', 'Lemon']
  },
  {
    id: 4,
    name: 'True love of greens',
    price: '₹149.00',
    image: 'j5.jpg',
    ingredients: ['Spinach', 'Kale', 'Cucumber']
  },
  {
    id: 6,
    name: 'Dry Fruit Boost',
    price: '₹210.00',
    image: 'j7.jpg',
    ingredients: ['Almonds', 'Cashews', 'Dates']
  },
  {
    id: 7,
    name: 'Seed explorer',
    price: '₹149.00',
    image: 'j8.jpg',
    ingredients: ['Chia Seeds', 'Flax Seeds', 'Almonds']
  },
  {
    id: 8,
    name: 'Shoots & sprouts with greens',
    price: '₹149.00',
    image: 'j9.jpg',
    ingredients: ['Alfalfa', 'Mung Beans', 'Spinach']
  },
  {
    id: 9,
    name: 'Pineapple, Coconut Water, Lime, and Mint Detox Tonic',
    price: '₹299.00',
    image: 'j10.jpg',
    ingredients: ['Pineapple', 'Coconut Water', 'Mint']
  },
  {
    id: 10,
    name: 'Cucumber Coolers with Greens',
    price: '₹149.00',
    image: 'j11.jpg',
    ingredients: ['Cucumber', 'Spinach', 'Lemon']
  },
  {
    id: 12,
    name: 'Mean Greens',
    price: '₹149.00',
    image: 'j13.jpg',
    ingredients: ['Spinach', 'Kale', 'Celery']
  }
];

const Juices = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animation
  }, []);

  const handleBookNow = (productName) => {
    const message = `Hi, I would like to book the product: ${productName}.`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleShowIngredients = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseIngredients = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-2">
      {/* Title Section with a link to the Home page */}
      <div className="flex justify-start mb-2">
        <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
          Home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-4">Juices</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md p-4"
            data-aos="fade-up" // Apply the fade-up animation
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
            <p className="text-lg text-red-500 mb-4 text-center">{product.price}</p>
            <div className="flex items-center justify-center mb-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-md p-1 text-center mr-4"
              />
              <button
                className="bg-orange-500 text-white py-2 px-2 rounded mr-2"
                onClick={() => handleBookNow(product.name)}
              >
                Book now
              </button>
              <button
                className="bg-green-500 text-white py-2 px-2 rounded-md"
                onClick={() => handleShowIngredients(product)}
              >
                Ingredient
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Ingredients Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
              {selectedProduct.ingredients.map((ingredient, index) => (
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

export default Juices;
