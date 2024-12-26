// import React from "react";

// const HomeBanner = () => {
//   return (
//     <header className="bg-white py-12 px-8">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
//         <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Healthy Eats, <span className="text-orange-500">Delivered Fresh</span>
//           </h1>
//           <p className="text-gray-600 text-lg mt-4">
//             Enjoy global flavors and local freshness. Crafted with the finest
//             ingredients for a healthy and satisfying meal or snack. Bites and
//             Fusion has something delicious for every craving.
//           </p>
//           <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center">
//             View Menu
//             <span className="ml-2 text-xl">&rarr;</span>
//           </button>
//         </div>
//         <div className="relative">
//           <img
//             src="h1.jpg" // Replace with actual juice image URL
//             alt="Juice"
//             className="w-200 h-96 rounded-lg shadow-lg"
//           />
//           <img
//             src="h2.jpg" // Replace with actual bowl image URL
//             alt="Bowl"
//             className="absolute -bottom-10 -left-20 w-54 h-44 rounded-lg shadow-lg "
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HomeBanner;
import React from "react";

const HomeBanner = () => {
  return (
    <header className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left side: Text content */}
        <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold">
            Healthy Eats, <span className="text-orange-500">Delivered Fresh</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Enjoy global flavors and local freshness. Crafted with the finest
            ingredients for a healthy and satisfying meal or snack. Bites and
            Fusion has something delicious for every craving.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center">
            View Menu
            <span className="ml-2 text-xl">&rarr;</span>
          </button>
          
          {/* Leaf images for decoration */}
          <div className="mt-4">
            <img
              src="h3.jpg" // Replace with actual leaf image URL
              alt="Leaf"
              className="inline-block w-6 h-6 mr-2"
            />
            <img
              src="h4.jpg" // Replace with actual leaf image URL
              alt="Leaf"
              className="inline-block w-6 h-6 mr-2"
            />
          </div>
        </div>

        {/* Right side: Images */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="h1.jpg" // Replace with actual juice image URL
            alt="Juice"
            className="w-full h-96 lg:h-80 rounded-lg shadow-lg object-cover"
          />
          <img
            src="h2.jpg" // Replace with actual bowl image URL
            alt="Bowl"
            className="absolute -bottom-10 -left-10 w-44 lg:w-54 h-40 lg:h-44 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;
