// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-pink-100">
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold">About us</h1>
//           <p className="mt-4 text-lg text-gray-600">Fuel Your Health with Our Nutritious Juices & Smoothies</p>
//         </div>
//         <div className="mt-12 text-center">
//           <h2 className="text-2xl font-semibold">Redefining healthy eating with fresh, organic flavors.</h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             At Bites Fusion, we are dedicated to changing the way people think about healthy eating. By combining fresh, organic ingredients with bold, innovative flavors, we create drinks that are both nutritious and delicious. Our vision is to make healthy choices easy, enjoyable, and accessible for everyone, one bite at a time.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';
import AboutBanner from './AboutBanner';
import SimpleIdeaSection from './SimpleIdeaSection';
import WhyChooseUs from './WhyChooseUs';

const AboutUs = () => {
  return (
    <>
      <div className="min-h-[60vh] bg-gradient-to-b from-white to-orange-100 rounded-b-3xl overflow-hidden mx-2">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">About us</h1>
            <p className="mt-4 text-sm text-gray-600">Fuel Your Health with Our Nutritious Juices & Smoothies</p>
          </div>
          {/* <div className="mt-12 flex justify-center">
            <div className="w-1/2 text-center">
              <h2 className="text-2xl font-semibold">Redefining healthy eating with fresh, organic flavors.</h2>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              At Bites Fusion, we are dedicated to changing the way people think about healthy eating. By combining fresh, organic ingredients with bold, innovative flavors, we create drinks that are both nutritious and delicious. Our vision is to make healthy choices easy, enjoyable, and accessible for everyone, one bite at a time.
            </p>
          </div> */}
        </div>
      </div>
      <div>
        <AboutBanner />
        <SimpleIdeaSection/>
        <WhyChooseUs />
      </div>
    </>
  );
};

export default AboutUs;

