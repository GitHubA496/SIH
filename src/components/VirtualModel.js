import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const VirtualModel = () => {
  return (
    <>
      <Navbar />
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">3D Virtual Model</h1>
      <div className="w-full h-[600px]">
        <iframe
          src={process.env.PUBLIC_URL + "/web-3dmodel-threejs/index.html"}
          title="3D Model"
          className="w-full h-full border-0"
          ></iframe>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VirtualModel;
