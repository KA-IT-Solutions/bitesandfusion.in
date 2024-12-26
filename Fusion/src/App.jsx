// import React from "react";

// function App() {
//   return (
//     <div className="bg-white min-h-screen font-sans">
//       {/* Header Section */}
//       <header className="flex justify-between items-center py-6 px-8 border-b">
//         <div className="text-2xl font-bold text-orange-500">Bites & Fusion</div>
//         <nav className="flex space-x-6">
//           <a href="#juices" className="text-gray-700 hover:text-orange-500">
//             Juices
//           </a>
//           <a href="#healthy-kids" className="text-gray-700 hover:text-orange-500">
//             Healthy Kids
//           </a>
//           <a href="#smoothies" className="text-gray-700 hover:text-orange-500">
//             Smoothies
//           </a>
//           <a href="#special-bowl" className="text-gray-700 hover:text-orange-500">
//             Special Bowl
//           </a>
//         </nav>
//         <div className="text-orange-500 text-sm">+91 79722 39800</div>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col md:flex-row justify-between items-center px-8 py-12">
//         {/* Text Content */}
//         <div className="max-w-lg mb-10 md:mb-0">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Healthy Eats, <span className="text-orange-500">Delivered Fresh</span>
//           </h1>
//           <p className="text-gray-600 text-lg mb-6">
//             Enjoy global flavors and local freshness. Crafted with the finest
//             ingredients for a healthy and satisfying meal or snack. Bites and
//             Fusion has something delicious for every craving.
//           </p>
//           <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg shadow-md">
//             View Menu
//           </button>
//         </div>

//         {/* Images */}
//         <div className="relative">
//           <img
//             src="https://via.placeholder.com/400x300" // Replace with your juice image URL
//             alt="Juice"
//             className="w-80 h-96 rounded-lg shadow-lg"
//           />
//           <img
//             src="https://via.placeholder.com/200x150" // Replace with your bowl image URL
//             alt="Bowl"
//             className="absolute -bottom-6 -left-6 w-48 h-36 rounded-lg shadow-lg border-4 border-white"
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Juices from "./Component/Juices/Juices";
import SmoothiesForKids from "./Component/SmoothiesForKids/SmoothiesForKids";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/juices" element={<Juices />} />
        <Route path="/healthy-kids" element={<SmoothiesForKids />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
