// src/components/ProductBanner.jsx
import React from 'react';

const ProductBanner = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-8">
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2">
          {/* <span role="img" aria-label="No Added Sugar" className="text-xl">🍬</span> */}
          <img src="/healthy.jpg" alt="No Added Sugar" className="w-5 h-5 mx-auto mb-2" />
          <span>No Added Sugar</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2">
          {/* <span role="img" aria-label="No Preservatives" className="text-xl">🧪</span> */}
          <img src="/no-preservatives.jpg" alt="No Preservatives" className="w-5 h-5 mx-auto mb-2" />
          <span>No Preservatives</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2">
          {/* <span role="img" aria-label="Homemade Almond Milk" className="text-xl">🥛</span> */}
          <img src="/milk.jpg" alt="Homemade Almond Milk" className="w-5 h-5 mx-auto mb-2" />
          <span>Homemade Almond Milk</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md flex items-center space-x-2">
          {/* <span role="img" aria-label="300ml Bottle" className="text-xl">🍼</span> */}
          <img src="/milkbottle.jpg" alt="Served in 300ml Bottle" className="w-5 h-5 mx-auto mb-2" />
          <span>Served in 300ml Bottle</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <img
            src="hc1.jpg"
            alt="Smoothies and Juices"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="bg-pink-200 p-4 rounded-md flex justify-center items-center">
          <div className="text-center">
            <img src="JUICE1.jpg" alt="Smoothies" className="w-20 h-20 mx-auto mb-2" />
            <span>Smoothies</span>
          </div>
        </div>
        <div className="bg-yellow-200 p-4 rounded-md flex justify-center items-center">
          <div className="text-center">
            <img src="KIDS1.jpg" alt="Healthy Kids" className="w-20 h-20 mx-auto mb-2" />
            <span>Healthy Kids</span>
          </div>
        </div>
        <div className="bg-green-200 p-4 rounded-md flex justify-center items-center">
          <div className="text-center">
            <img src="j1.jpg" alt="Juices" className="w-20 h-20 mx-auto mb-2" />
            <span>Juices</span>
          </div>
        </div>
        <div className="bg-yellow-300 p-4 rounded-md flex justify-center items-center">
          <div className="text-center">
            <img src="bowls.jpg" alt="Bowls" className="w-20 h-20 mx-auto mb-2" />
            <span>Bowls</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
