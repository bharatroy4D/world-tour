import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API)
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="bg-white py-16 px-5 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
      <p className="text-center text-lg text-gray-600 mb-6">
        We'd love to hear from you! Please fill out the form below to get in touch.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 text-lg" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-lg" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="subscribe" className="text-gray-600 text-lg">
              Subscribe to our newsletter
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
