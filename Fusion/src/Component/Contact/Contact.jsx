import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.reason &&
      formData.message
    ) {
      // Handle form submission
      console.log('Form submitted', formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Get in touch</h1>
        <div className="mt-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Ex. John Taitor"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="reason"
                >
                  Reason for contact
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="My order">My order</option>
                  <option value="My account">My account</option>
                  <option value="Marketing/press">Marketing/press</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Your message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <div className="text-gray-900">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Our offices</h3>
                  <p>
                    Sr no 119/1/15, Sankalp Society, near One<br /> West Building,
                    Balewadi highstreet road,<br /> Baner, Pune-45
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Call us</h4>
                  <p>+91 79722 39800</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h4 className="text-xl font-semibold">Send us an email</h4>
                  <p>rekha@bitesandfusion.in</p>
                </div>
                <div className="ml-0"> {/* Remove margin-left here */}
                  <h4 className="text-xl font-semibold">Follow us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61566853419921&mibextid=LQQJ4d&rdid=334R7nS7FYFV2ZGF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FiqUqq8TYkhJzU4NS%2F%3Fmibextid%3DLQQJ4d" className="text-gray-500 hover:text-orange-500">
                      <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/bitesfusion.in/profilecard/?igsh=MTNjc2hnZ2N2bDJ1aA%3D%3D" className="text-gray-500 hover:text-orange-500">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d484126.3500105195!2d73.789006!3d18.563346!3m2!1i1024!2i768!4f13.1!2m1!1sSr%20no%20119%2F1%2F15%2C%20Sankalp%20Society%2C%20near%20One%20West%20Building%20%2CBalewadi%20highstreet%20road%2C%20Baner%2C%20Pune-45!5e0!3m2!1sen!2sus!4v1734957488032!5m2!1sen!2sus" 
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
