
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import ProductBanner from '../Home/ProductBanner';

const products = [
  {
    id: 1,
    name: 'Wheatgrass Pineapple',
    price: '₹203.00',
    image: 'j2.jpg'
  },
  {
    id: 2,
    name: 'Grasshopper',
    price: '₹239.00',
    image: 'j3.jpg'
  },
  {
    id: 3,
    name: 'Turmeric Tonic',
    price: '₹203.00',
    image: 'j4.jpg'
  },
  {
    id: 4,
    name: 'True love of greens',
    price: '₹239.00',
    image: 'j5.jpg'
  },
  {
    id: 5,
    name: 'Rosemary tea',
    price: '₹178.00',
    image: 'j6.jpg'
  },
  {
    id: 6,
    name: 'Dry Fruit Boost',
    price: '₹299.00',
    image: 'j7.jpg'
  },
  {
    id: 7,
    name: 'Seed explorer',
    price: '₹299.00',
    image: 'j8.jpg'
  },
  {
    id: 8,
    name: 'Shoots & sprouts with greens',
    price: '₹299.00',
    image: 'j9.jpg'
  },
  {
    id: 9,
    name: 'Pineapple, Coconut Water, Lime, and Mint Detox Tonic',
    price: '₹299.00',
    image: 'j10.jpg'
  },
  {
    id: 10,
    name: 'Cucumber Coolers with Greens',
    price: '₹299.00',
    image: 'j11.jpg'
  },
  {
    id: 11,
    name: 'My Organics Green Juices with Sunflower Sprouts',
    price: '₹299.00',
    image: 'j12.jpg'
  },
  {
    id: 12,
    name: 'Mean Greens',
    price: '₹299.00',
    image: 'j13.jpg'
  },
  {
    id: 13,
    name: 'Raspberries Mint Kiss',
    price: '₹299.00',
    image: 'j14.jpg'
  }
];

const Juices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animation
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Juices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md p-4"
            data-aos="fade-up" // Apply the fade-up animation
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
            <p className="text-lg text-red-500 mb-4 text-center">{product.price}</p>
            <div className="flex items-center justify-center mb-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-md p-1 text-center mr-4"
              />
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md">
                Book now
              </button>
            </div>
          </div>
        ))}
      </div>
      <>
        <ProductBanner/>
      </>
    </div>
    
  );
};

export default Juices;
