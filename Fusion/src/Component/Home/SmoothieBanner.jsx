import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const SmoothieBanner = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center" data-aos="fade-up">
      <div className="md:w-1/2 flex justify-center md:justify-start" data-aos="fade-right">
        <img
          className="rounded-lg shadow-lg"
          src="smoothie.jpg" // replace with your image URL
          alt="Chocolate Banana Smoothie"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8" data-aos="fade-left">
        <h2 className="text-2xl font-bold text-gray-900">Chocolate Banana Smoothie</h2>
        <p className="mt-4 text-gray-700">
          Rich, creamy, and irresistibly chocolaty, this smoothie combines ripe bananas with a hint
          of cocoa for a sweet treat that's also healthy.
        </p>
        <div className="mt-8">
          <a
            href="/healthy-kids"
            className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
            data-aos="zoom-in"
          >
            View Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmoothieBanner;
