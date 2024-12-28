import React, { useState, useEffect } from 'react';

const AboutBanner = () => {
  // State for counters
  const [count85, setCount85] = useState(0);
  const [count70, setCount70] = useState(0);
  const [count60, setCount60] = useState(0);

  // Effect to animate counters
  useEffect(() => {
    const interval85 = setInterval(() => {
      if (count85 < 85) setCount85((prev) => prev + 1);
    }, 20);

    const interval70 = setInterval(() => {
      if (count70 < 70) setCount70((prev) => prev + 1);
    }, 20);

    const interval60 = setInterval(() => {
      if (count60 < 60) setCount60((prev) => prev + 1);
    }, 20);

    return () => {
      clearInterval(interval85);
      clearInterval(interval70);
      clearInterval(interval60);
    };
  }, [count85, count70, count60]);

  return (
    <div className="min-h-[60vh] rounded-b-3xl overflow-hidden mx-8">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold">Redefining healthy<br/> eating with fresh,<br/> organic flavors.</h2>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-sm text-gray-600">
              At Bites Fusion, we are dedicated to changing the way people think about healthy eating. By combining fresh, organic ingredients with bold, innovative flavors, we create drinks that are both nutritious and delicious. Our vision is to make healthy choices easy, enjoyable, and accessible for everyone, one bite at a time.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <img 
            src="cover.jpg" 
            alt="Healthy Food" 
            className="mx-auto border-8 border-white hover:border-orange-200 transition-all rounded w-4/5"
          />
        </div>

        {/* New Content Section Below the Image */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold">Natural Ingredients</h3>
              <p className="text-sm text-gray-600">
                Organic foods are packed with more antioxidants, helping to protect your body from harmful free radicals and support overall health.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Sustainability</h3>
              <p className="text-sm text-gray-600">
                Organic foods are better for the environment, promoting sustainable farming practices that reduce pollution and conserve water and soil health.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Quality & Freshness</h3>
              <p className="text-sm text-gray-600">
                Physical exercise is essential for your health, boosting energy, improving mental well-being, and supporting overall fitness and longevity.
              </p>
            </div>
          </div>

          {/* Statistics Section with Border and Shadow */}
          <div className="mt-12 bg-orange-100 p-6 rounded-lg border-8 border-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-semibold text-black-500">{count85}%</h3>
                <p className="text-sm text-gray-600">
                  Consumers prefer organic food over conventional options for health and environmental reasons.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-semibold text-black-500">{count70}%</h3>
                <p className="text-sm text-gray-600">
                  Parents seek healthier options for their kids' snacks and drinks.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-semibold text-black-500">{count60}%</h3>
                <p className="text-sm text-gray-600">
                  People who consume smoothies daily report improved energy levels and digestion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
