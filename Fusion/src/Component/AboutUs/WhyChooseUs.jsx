import React, { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const [detoxifying, setDetoxifying] = useState(0);
  const [energyBoost, setEnergyBoost] = useState(0);
  const [digestion, setDigestion] = useState(0);
  const [weightManagement, setWeightManagement] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (detoxifying < 98) setDetoxifying((prev) => prev + 1);
      else clearInterval(interval1);
    }, 20);

    const interval2 = setInterval(() => {
      if (energyBoost < 92) setEnergyBoost((prev) => prev + 1);
      else clearInterval(interval2);
    }, 20);

    const interval3 = setInterval(() => {
      if (digestion < 85) setDigestion((prev) => prev + 1);
      else clearInterval(interval3);
    }, 20);

    const interval4 = setInterval(() => {
      if (weightManagement < 90) setWeightManagement((prev) => prev + 1);
      else clearInterval(interval4);
    }, 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [detoxifying, energyBoost, digestion, weightManagement]);

  return (
    <div className="bg-white py-16 px-8 md:px-16">
      <div className="container mx-auto">
        {/* Section 1: Why Choose Our Juices and Smoothies */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Why Choose Our Juices and Smoothies?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We use kefir milk, almond milk, and oat milk, along with protein
            powder made from nuts, all produced in-house for our smoothies and
            juices. We never use artificial flavors or sweeteners—everything is
            100% pure, natural, and crafted with care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-orange-50 rounded-lg p-6 shadow">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">{detoxifying}%</h3>
              <p className="text-gray-700 font-semibold">Detoxifying</p>
              <p className="text-gray-600 text-sm mt-2">
                Flushes out toxins from your body, promoting a healthy digestive
                system.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">{energyBoost}%</h3>
              <p className="text-gray-700 font-semibold">Energy Boost</p>
              <p className="text-gray-600 text-sm mt-2">
                Packed with essential nutrients to keep you energized all day
                long.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">{digestion}%</h3>
              <p className="text-gray-700 font-semibold">Improved Digestion</p>
              <p className="text-gray-600 text-sm mt-2">
                Ingredients like ginger, greens, and fruits aid in digestion.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">{weightManagement}%</h3>
              <p className="text-gray-700 font-semibold">Weight Management</p>
              <p className="text-gray-600 text-sm mt-2">
                Perfect for both weight loss and muscle gain with tailored
                smoothies and shakes.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Why People Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Why people choose us?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              At Bites Fusion, we believe in the power of wholesome, natural
              ingredients to fuel your body. Our commitment to health,
              sustainability, and taste is why customers keep coming back.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Boost Muscle Recovery</span>
              </li>
              <li className="flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Support a Healthy Lifestyle</span>
              </li>
              <li className="flex items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Premium Ingredients</span>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="why.jpg"
              alt="Healthy Lifestyle"
              className="rounded-lg shadow-lg w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
