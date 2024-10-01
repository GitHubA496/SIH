import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-100 to-white">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-blue-600">About Us</h1>
      <p className="text-lg text-gray-700 mb-4 max-w-2xl text-center">
        Welcome to our website! This is A project Consturcted specifically For S.I.H. , and aims to provide a platform for students to learn and discover more About AYUSH practices.
      </p>
      
      <div className="flex flex-col md:flex-row md:space-x-8 mt-6">
        <div className="flex flex-col items-center mb-4 md:mb-0 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Mission</h2>
          <p className="text-gray-600 text-center">
            To empower our citizens by providing top-notch services that help them grow.
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-4 md:mb-0 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Vision</h2>
          <p className="text-gray-600 text-center">
            To be the leading provider in our industry, recognized for our commitment to quality and customer satisfaction.
          </p>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Values</h2>
          <p className="text-gray-600 text-center">
            Integrity, innovation, and excellence are at the core of everything we do.
          </p>
        </div>
      </div>
      
      {/* <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Meet the Team</h2>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          Our diverse team brings a wealth of experience and expertise to deliver exceptional results.
        </p>
        {/* Add team member profiles here 
      </div> */}
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
