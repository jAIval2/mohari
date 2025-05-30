import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutUsImage from '../assets/images/Image.jpg'; // Sample image for About Us

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 pt-[25px]"></div>
      {/* Main Content */}
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${AboutUsImage})` }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-kalam text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              At Mohari, we believe in sustainable and stylish fashion that empowers individuals while respecting the planet. Our mission is to create high-quality clothing that combines comfort, durability, and timeless design.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-hedvig text-[#6F3A19] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, Mohari started with a simple yet profound idea: to offer apparel that not only looks good but also feels good. Our founders were inspired by the growing need for sustainable fashion that doesn't compromise on style or quality.
            </p>
            <p className="text-lg text-gray-700">
              Over the years, we've expanded our range to include a variety of products, each crafted with care and a commitment to ethical practices. From sourcing eco-friendly materials to ensuring fair labor practices, every step of our process is thoughtfully designed to make a positive impact.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-hedvig text-[#6F3A19] mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6F3A19] bg-opacity-75 rounded-full flex items-center justify-center mb-4">
                  {/* Icon Placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 1.343 3 3H9c0-1.657 1.343-3 3-3zM5 20h14a2 2 0 002-2V8H3v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-kalam mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We prioritize eco-friendly materials and sustainable practices in every aspect of our production.
                </p>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6F3A19] bg-opacity-75 rounded-full flex items-center justify-center mb-4">
                  {/* Icon Placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M19 10h.01M5 10h.01M22 12a10 10 0 11-20 0 10 10 0 0120 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-kalam mb-2">Quality</h3>
                <p className="text-gray-700">
                  Our products are crafted with the highest standards to ensure longevity and satisfaction.
                </p>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#6F3A19] bg-opacity-75 rounded-full flex items-center justify-center mb-4">
                  {/* Icon Placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-kalam mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace creativity and continuously seek new ways to improve our products and processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-hedvig text-[#6F3A19] mb-6">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center">
                <img src={AboutUsImage} alt="Team Member" className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-kalam mb-2">John Doe</h3>
                <p className="text-gray-700">Founder & CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center text-center">
                <img src={AboutUsImage} alt="Team Member" className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-kalam mb-2">Jane Smith</h3>
                <p className="text-gray-700">Chief Designer</p>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center text-center">
                <img src={AboutUsImage} alt="Team Member" className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-kalam mb-2">Emily Johnson</h3>
                <p className="text-gray-700">Head of Marketing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-hedvig text-[#6F3A19] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to revolutionize the fashion industry by promoting sustainability, ethical practices, and innovative designs. We aim to create a positive impact on both our customers and the environment, ensuring that every product we offer is a testament to our commitment to excellence and responsibility.
            </p>
            <p className="text-lg text-gray-700">
              By choosing Mohari, you are not only investing in high-quality apparel but also supporting a brand that values transparency, integrity, and the well-being of our planet. Together, we can make fashion a force for good.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold font-hedvig text-[#6F3A19] mb-6">What Our Customers Say</h2>
            <div className="space-y-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "Mohari's commitment to sustainability is truly inspiring. Their products are not only stylish but also made with care for the environment."
                </p>
                <div className="flex items-center">
                  <img src={AboutUsImage} alt="Customer" className="w-10 h-10 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-kalam text-lg">Sarah Lee</h4>
                    <p className="text-gray-500 text-sm">California, USA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "I love the quality and comfort of Mohari's clothing. It's clear that they put a lot of thought into their designs and materials."
                </p>
                <div className="flex items-center">
                  <img src={AboutUsImage} alt="Customer" className="w-10 h-10 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-kalam text-lg">Michael Brown</h4>
                    <p className="text-gray-500 text-sm">New York, USA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "Fantastic customer service and beautiful products. I feel good knowing that my purchases are supporting a brand that cares about the planet."
                </p>
                <div className="flex items-center">
                  <img src={AboutUsImage} alt="Customer" className="w-10 h-10 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-kalam text-lg">Jessica Wong</h4>
                    <p className="text-gray-500 text-sm">Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
