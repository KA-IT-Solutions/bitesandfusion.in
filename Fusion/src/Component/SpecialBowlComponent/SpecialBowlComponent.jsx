// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS CSS
// import ProductBanner from '../Home/ProductBanner';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const specialBowls = [
//   {
//     id: 1,
//     name: 'Oats and Seed Bowl',
//     price: 375.00,
//     imageUrl: 'b1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Honey Dry Fruit and Oats Bowl',
//     price: 375.00,
//     imageUrl: 'b2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Dates and Seed Fusion Bowl',
//     price: 375.00,
//     imageUrl: 'b3.jpg',
//   },
//   {
//     id: 4,
//     name: 'Bites Fusion Special Bowl',
//     price: 375.00,
//     imageUrl: 'b4.jpg',
//   },
// ];

// const SpecialBowlComponent = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS when the component mounts
//   }, []);

//   return (
//     <div className="container mx-auto px-2">
//       {/* Title Section with a link to Home */}
//       <div className="flex justify-start mb-2">
//         <Link to="/" className="text-xl text-orange-500 hover:text-orange-700">
//           Home
//         </Link>
//       </div>

//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center my-4" data-aos="fade-up">
//         Special Bowl
//       </h1>

//       {/* Special Bowls List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {specialBowls.map((bowl) => (
//           <div
//             key={bowl.id}
//             className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//             data-aos="fade-up" // Apply fade-up animation to each bowl card
//             data-aos-delay={`${bowl.id * 100}`} // Stagger the animation by id
//           >
//             <img
//               src={bowl.imageUrl}
//               alt={bowl.name}
//               className="w-full h-64 object-cover transition-transform transform hover:scale-105"
//               data-aos="zoom-in" // Apply zoom-in animation to the image
//             />
//             <div className="p-4 text-center">
//               <h2 className="text-lg font-semibold">{bowl.name}</h2>
//               <p className="text-red-500 mt-2">₹{bowl.price.toFixed(2)}</p>
//               <div className="flex justify-center items-center mt-4">
//                 <input
//                   type="number"
//                   min="1"
//                   defaultValue="1"
//                   className="border rounded w-16 px-2 py-1 mr-2 text-center"
//                 />
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded" data-aos="fade-up">
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

// export default SpecialBowlComponent;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductBanner from '../Home/ProductBanner';
import { Link } from 'react-router-dom'; // Import Link for navigation

const specialBowls = [
  {
    id: 1,
    name: 'Oats and Seed Bowl',
    price: 375.00,
    imageUrl: 'b1.jpg',
  },
  {
    id: 2,
    name: 'Honey Dry Fruit and Oats Bowl',
    price: 375.00,
    imageUrl: 'b2.jpg',
  },
  {
    id: 3,
    name: 'Dates and Seed Fusion Bowl',
    price: 375.00,
    imageUrl: 'b3.jpg',
  },
  {
    id: 4,
    name: 'Bites Fusion Special Bowl',
    price: 375.00,
    imageUrl: 'b4.jpg',
  },
];

const SpecialBowlComponent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  // Function to handle booking via WhatsApp
  const handleBookNow = (bowlName, price, quantity) => {
    const message = `Hi, I would like to book the following bowl:\n\nName: ${bowlName}\nPrice: ₹${price}\nQuantity: ${quantity}`;
    const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
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
        Special Bowl
      </h1>

      {/* Special Bowls List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialBowls.map((bowl) => (
          <div
            key={bowl.id}
            className="border rounded-lg shadow-md overflow-hidden flex flex-col items-center"
            data-aos="fade-up" // Apply fade-up animation to each bowl card
            data-aos-delay={`${bowl.id * 100}`} // Stagger the animation by id
          >
            <img
              src={bowl.imageUrl}
              alt={bowl.name}
              className="w-full h-64 object-cover transition-transform transform hover:scale-105"
              data-aos="zoom-in" // Apply zoom-in animation to the image
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{bowl.name}</h2>
              <p className="text-red-500 mt-2">₹{bowl.price.toFixed(2)}</p>
              <div className="flex justify-center items-center mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border rounded w-16 px-2 py-1 mr-2 text-center"
                  id={`quantity-${bowl.id}`} // Add ID for quantity input
                />
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                  data-aos="fade-up"
                  onClick={() => {
                    const quantity = document.getElementById(`quantity-${bowl.id}`).value;
                    handleBookNow(bowl.name, bowl.price, quantity);
                  }}
                >
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

export default SpecialBowlComponent;
