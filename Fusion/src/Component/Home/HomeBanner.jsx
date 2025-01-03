// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS CSS

// const HomeBanner = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS on component mount
//   }, []);

//   return (
//     <header className="bg-white py-12 px-8">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
//         {/* Left side: Text content */}
//         <div
//           className="max-w-lg text-center lg:text-left mb-8 lg:mb-0"
//           data-aos="fade-right" // Add fade-right animation
//         >
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Healthy Eats, <span className="text-orange-500">Delivered Fresh</span>
//           </h1>
//           <p className="text-gray-600 text-lg mt-4">
//             Enjoy global flavors and local freshness. Crafted with the finest
//             ingredients for a healthy and satisfying meal or snack. Bites and
//             Fusion has something delicious for every craving.
//           </p>
//           <a
//             href="/juices" // Replace with the link to the menu or other page
//             className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center w-48" // Set width as needed
//           >
//             View Menu
//             <span className="ml-2 text-xl">&rarr;</span>
//           </a>

//           {/* Leaf images for decoration */}
//           <div className="mt-4" data-aos="zoom-in"> {/* Add zoom-in effect */}
//             <img
//               src="h3.jpg" // Replace with actual leaf image URL
//               alt="Leaf"
//               className="inline-block w-6 h-6 mr-2"
//             />
//             <img
//               src="h4.jpg" // Replace with actual leaf image URL
//               alt="Leaf"
//               className="inline-block w-6 h-6 mr-2"
//             />
//           </div>
//         </div>

//         {/* Right side: Images */}
//         <div className="relative w-full lg:w-1/2">
//           <img
//             src="m2.jpg" // Replace with actual juice image URL
//             alt="Juice"
//             className="w-full lg:w-4/5 h-auto rounded-lg shadow-lg object-cover"
//             data-aos="fade-up" // Smooth fade-up for large image
//             data-aos-delay="200" // Delay the animation slightly for better effect
//           />
//           <img
//             src="h2.jpg" // Replace with actual bowl image URL
//             alt="Bowl"
//             className="absolute -bottom-10 -left-10 w-44 lg:w-54 h-40 lg:h-44 rounded-lg shadow-lg object-cover"
//             data-aos="zoom-in-up" // Strong zoom-in effect for small image
//             data-aos-delay="400" // Delay further to show after large image
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HomeBanner;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const HomeBanner = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <header className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left side: Text content */}
        <div
          className="max-w-lg text-center lg:text-left mb-8 lg:mb-0"
          data-aos="fade-right" // Add fade-right animation
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Healthy Eats, <span className="text-orange-500">Delivered Fresh</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Enjoy global flavors and local freshness. Crafted with the finest
            ingredients for a healthy and satisfying meal or snack. Bites and
            Fusion has something delicious for every craving.
          </p>
          <a
            href="/juices" // Replace with the link to the menu or other page
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center w-48" // Set width as needed
          >
            View Menu
            <span className="ml-2 text-xl">&rarr;</span>
          </a>
        </div>

        {/* Right side: Images */}
        <div className="relative w-full lg:w-1/2">
          {/* Main Image */}
          <img
            src="m2.jpg" // Replace with actual juice image URL
            alt="Juice"
            className="w-full lg:w-4/5 h-auto rounded-lg shadow-lg object-cover"
            data-aos="fade-up" // Smooth fade-up for large image
            data-aos-delay="200" // Delay the animation slightly for better effect
          />
          {/* Bowl Image */}
          <img
            src="h2.jpg" // Replace with actual bowl image URL
            alt="Bowl"
            className="absolute -bottom-10 -left-10 w-44 lg:w-54 h-40 lg:h-44 rounded-lg shadow-lg object-cover"
            data-aos="zoom-in-up" // Strong zoom-in effect for small image
            data-aos-delay="400" // Delay further to show after large image
          />
          {/* Leaf Image at the Top */}
          <img
            src="h3.jpg" // Replace with actual leaf image URL
            alt="Leaf Top"
            className="absolute -top-6 left-18 w-10 h-10 rounded-lg shadow-md object-cover"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          {/* Leaf Image at the Bottom */}
          <img
            src="h4.jpg" // Replace with actual leaf image URL
            alt="Leaf Bottom"
            className="absolute -bottom-14 left-24 w-10 h-10 rounded-lg shadow-md object-cover"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeBanner;
