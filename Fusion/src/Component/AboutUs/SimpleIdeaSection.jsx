
import React from "react";

const SimpleIdeaSection = () => {
  return (
    <div className="bg-white py-12 px-8 md:px-16 rounded-3xl shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="ab1.jpg"
            alt="Healthy Food Bowl"
            className="rounded-xl shadow-lg w-5/5 border-8 border-white-300" // Added radius and border
          />
        </div>

        {/* Headline and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-4">
            A simple idea - simplify food, <br /> make it sustainable
          </h2>
          <p className="text-gray-600 text-sm">
            At <span className="font-semibold text-gray-800">Bites Fusion</span>, our founder believes that healthy eating
            should never mean sacrificing taste. "My goal has always been to
            craft meals and drinks that not only nourish the body but also
            excite the palate," says the founder. This passion for blending
            flavor with nutrition drives every recipe and product we create,
            ensuring that every bite is a fusion of freshness, health, and
            delight.
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-white shadow-md rounded-xl p-6 pt-8 text-center w-64 mx-auto md:mx-0">
          <h4 className="text-sm text-gray-600 mt-2 mb-4">
            Our Journey to Health and Wellness
          </h4>
          <img
            src="r1.jpg"
            alt="Founder"
            className="rounded-full mx-auto mb-4 w-20 h-20 object-cover shadow"
          />
          <h3 className="text-lg font-semibold mb-1">Rekha Karamchandani</h3>
          <p className="text-sm text-gray-500">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleIdeaSection;
