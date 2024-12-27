import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ProductBanner = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once when scrolling to element
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Banner Image (1/2 width) */}
        <div className="col-span-1" data-aos="fade-up">
          <img
            src="hc1.jpg"
            alt="Smoothies and Juices"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Card Section (1/2 width) */}
        <div className="grid grid-cols-2 gap-4 col-span-1">
          {/* Card Section 1 */}
          <a 
            href="/smoothies" 
            className="bg-pink-200 p-4 rounded-md flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="100" // Add delay for staggered effect
          >
            <div className="text-center">
              <img src="JUICE1.jpg" alt="Smoothies" className="w-20 h-20 mx-auto mb-2" />
              <span>Smoothies</span>
            </div>
          </a>

          {/* Card Section 2 */}
          <a 
            href="/healthy-kids" 
            className="bg-yellow-200 p-4 rounded-md flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="200" // Add delay for staggered effect
          >
            <div className="text-center">
              <img src="KIDS1.jpg" alt="Healthy Kids" className="w-20 h-20 mx-auto mb-2" />
              <span>Healthy Kids</span>
            </div>
          </a>

          {/* Card Section 3 */}
          <a 
            href="/juices" 
            className="bg-green-200 p-4 rounded-md flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="text-center">
              <img src="j1.jpg" alt="Juices" className="w-20 h-20 mx-auto mb-2" />
              <span>Juices</span>
            </div>
          </a>

          {/* Card Section 4 */}
          <a 
            href="/bowl" 
            className="bg-yellow-300 p-4 rounded-md flex justify-center items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="text-center">
              <img src="bowls.jpg" alt="Bowls" className="w-20 h-20 mx-auto mb-2" />
              <span>Bowls</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
