import React from 'react';

const SmoothieBanner = () => {
  return (
    <div className="bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <img
          className="rounded-lg shadow-lg"
          src="smoothie.jpg" // replace with your image URL
          alt="Chocolate Banana Smoothie"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-gray-900">Chocolate Banana Smoothie</h2>
        <p className="mt-4 text-gray-700">
          Rich, creamy, and irresistibly chocolaty, this smoothie combines ripe bananas with a hint
          of cocoa for a sweet treat that's also healthy.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
          >
            View Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmoothieBanner;
