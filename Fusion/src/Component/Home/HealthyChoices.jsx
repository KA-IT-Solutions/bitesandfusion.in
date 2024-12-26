// import React from "react";

// const HealthyChoices = () => {
//   const choices = [
//     {
//       name: "Cacao Almond Bliss Smoothie",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//     {
//       name: "Honey Dry Fruit and Oats Bowl",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//     {
//       name: "Blueberry Smoothie",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//     {
//       name: "Mean Greens",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//     {
//       name: "Pineapple Detox Tonic",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//     {
//       name: "Orange Creamsicle Smoothie",
//       image: "https://via.placeholder.com/300x200", // Replace with actual URL
//     },
//   ];

//   return (
//     <section className="py-12 px-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold">
//           Explore Our <span className="text-orange-500">Healthy Choices</span>
//         </h2>
//         <p className="text-gray-600 text-lg mt-4">
//           Whether you're craving a refreshing smoothie, a hearty snack, Bites
//           and Fusion has something for everyone.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {choices.map((choice, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg overflow-hidden"
//           >
//             <img
//               src={choice.image}
//               alt={choice.name}
//               className="w-full h-52 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-center">
//                 {choice.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HealthyChoices;
import React from "react"; 

const HealthyChoices = () => {
  const choices = [
    {
      name: "Cacao Almond Bliss Smoothie",
      image: "/hc1.jpg",
    },
    {
      name: "Honey Dry Fruit and Oats Bowl",
      image: "/hc2.jpg",
    },
    {
      name: "Blueberry Smoothie",
      image: "/hc3.jpg",
    },
    {
      name: "Mean Greens",
      image: "/hc4.jpg",
    },
    {
      name: "Pineapple Detox Tonic",
      image: "/hc5.jpg",
    },
    {
      name: "Orange Creamsicle Smoothie",
      image: "/hc6.jpg",
    },
  ];

  return (
    <section className="py-12 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Explore Our <span className="text-orange-500">Healthy Choices</span>
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Whether you're craving a refreshing smoothie, a hearty snack,<br /> Bites
          and Fusion has something for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {choices.map((choice, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image with rounded corners */}
            <img
              src={choice.image}
              alt={choice.name}
              className="w-full h-auto object-cover rounded-lg" // Add rounded-lg here for rounded corners
            />
            <div className="p-4 flex-grow">
              {/* Decreased font size for name */}
              <h5 className="text-sm font-semibold text-center">{choice.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthyChoices;
