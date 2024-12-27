import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import AOS CSS

const HowItWorks = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900" data-aos="fade-up">
          How it works
        </h2>
        <p className="mt-4 text-gray-500 mx-auto max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          Detox smoothies eliminate toxins and boost metabolism with nutrient-rich ingredients. 
          Enjoy a refreshing blend that revitalizes your body and enhances your wellness!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-center space-y-8" data-aos="fade-right">
          <div className="flex flex-col items-center text-center">
            <img src="cucumber.jpg" alt="Cucumber" className="mb-2 w-12 h-12 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Cucumber</h3>
            <p className="mt-1 text-sm text-gray-500">
              Cucumber hydrates the body and is low in calories, making it a refreshing choice for detox.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="apple.jpg" alt="Apple" className="mb-2 w-12 h-12 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Apple</h3>
            <p className="mt-1 text-sm text-gray-500">
              Apples are rich in fiber and vitamin C, promoting heart health and aiding in weight management.
            </p>
          </div>
        </div>

        <div className="flex justify-center" data-aos="zoom-in-up">
          <img src="w.jpg" alt="Juice Bottle" className="rounded-lg shadow-lg h-90" />
        </div>

        <div className="flex flex-col items-center text-center space-y-8" data-aos="fade-left">
          <div className="flex flex-col items-center text-center">
            <img src="lemon.jpg" alt="Lemon" className="mb-2 w-14 h-14 rounded-full" />
            <h4 className="text-lg font-bold text-gray-900">Lemon</h4>
            <p className="mt-1 text-sm text-gray-500">
              Lemons boost immunity with vitamin C while detoxifying the liver and balancing pH levels.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="water.jpg" alt="Fresh Water" className="mb-2 w-12 h-12 rounded-full" />
            <h3 className="text-lg font-bold text-gray-900">Fresh Water</h3>
            <p className="mt-1 text-sm text-gray-500">
              Fresh water keeps the body hydrated and aids in flushing out toxins, enhancing overall health.
            </p>
          </div>
        </div>
      </div>

      {/* Additional icons section */}
      <div className="flex justify-center space-x-4 mb-8">
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2" data-aos="zoom-in">
          <span role="img" aria-label="No Added Sugar" className="text-xl">🍬</span>
          <span>No Added Sugar</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2" data-aos="zoom-in" data-aos-delay="200">
          <span role="img" aria-label="No Preservatives" className="text-xl">🧪</span>
          <span>No Preservatives</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2" data-aos="zoom-in" data-aos-delay="400">
          <span role="img" aria-label="Homemade Almond Milk" className="text-xl">🥛</span>
          <span>Homemade Almond Milk</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2" data-aos="zoom-in" data-aos-delay="600">
          <span role="img" aria-label="Served in 300ml Bottle" className="text-xl">🍼</span>
          <span>Served in 300ml Bottle</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
