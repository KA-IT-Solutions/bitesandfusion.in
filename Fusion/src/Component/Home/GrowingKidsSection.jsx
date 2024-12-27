import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const GrowingKidsSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          data-aos="fade-right" // Add fade-right animation
        >
          <h2 className="text-3xl font-extrabold text-orange-600">Nourishing Drinks</h2>
          <h3 className="text-3xl font-extrabold text-gray-900">for Growing Kids</h3>
          <p className="mt-4 text-gray-500">
            Serve up smiles with our yummy and healthy kids’ drinks! Packed with essential nutrients
            and bursting with flavor, our beverages make healthy eating fun for your children. Order
            now for colorful, kid-friendly drinks that parents trust and kids love.
          </p>
          <div className="mt-8">
            <a
              href="/healthy-kids"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
              data-aos="zoom-in" // Add zoom-in animation
            >
              Explore Menu
            </a>
          </div>
        </div>
        <div className="flex justify-center" data-aos="fade-left"> {/* Add fade-left animation */}
          <img
            className="rounded-lg shadow-lg"
            src="kids.jpg" // replace with your image URL
            alt="Growing Kids"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center" data-aos="fade-up">
          <h4 className="text-xl font-bold text-gray-900">100% Organic</h4>
          <p className="mt-2 text-gray-500">
            Savor the purity of our 100% organic ingredients, carefully sourced for your health and
            well-being. Choose quality with every sip and bite!
          </p>
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-xl font-bold text-gray-900">Optimal weight gain</h4>
          <p className="mt-2 text-gray-500">
            Support healthy weight gain with our nutrient-dense formula, designed for optimal
            results in every sip and bite!
          </p>
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <h4 className="text-xl font-bold text-gray-900">Diet Health Service</h4>
          <p className="mt-2 text-gray-500">
            Achieve your health goals with our tailored diet health service, designed for optimal
            wellness in every meal. Choose quality for a healthier lifestyle!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrowingKidsSection;
