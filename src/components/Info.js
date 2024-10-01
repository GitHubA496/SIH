import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function InformationPage() {
  const location = useLocation();
  const { plant, imageSrc } = location.state || {}; // Destructure the received data
  console.log(plant);

  if (!plant) {
    return <p>Loading...</p>; // Handle case where plant data is not available
  }

  return (
    <>
      <Navbar />
      <div className="p-6 bg-green-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">{plant.plant.name}</h1>
        <p className="text-xl italic mb-4 text-white">
          <strong>Scientific Name:</strong> {plant.plant.scientific_name}
        </p>

        {imageSrc && (
          <img
            src={imageSrc}
            alt={plant.plant.name}
            className="w-1/2 mb-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        )}

        {plant.plant.audio_story && (
          <section className="mb-6 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Audio Story</h2>
            <p>{plant.plant.audio_story.description}</p>
            {/* Placeholder for actual audio component */}
          </section>
        )}

        {/* Overview Section */}
        {plant.plant.overview && (
          <section className="mb-6 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Overview</h2>
            <p>{plant.plant.overview.description}</p>
            <p><strong>Origin:</strong> {plant.plant.overview.origin}</p>
            <p><strong>Did You Know:</strong> {plant.plant.overview.did_you_know}</p>
          </section>
        )}

        {/* Features Section */}
        {plant.plant.features && (
          <section className="mb-6 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Plant Features</h2>
            <ul className="list-disc ml-6">
              <li><strong>Climate:</strong> {plant.plant.features.climate}</li>
              <li><strong>Plant Type:</strong> {plant.plant.features.plant_type}</li>
              <li><strong>Sunlight:</strong> {plant.plant.features.sunlight}</li>
              <li><strong>Soil Type:</strong> {plant.plant.features.soil_type}</li>
              <li><strong>Size:</strong> {plant.plant.features.size}</li>
              <li><strong>Water:</strong> {plant.plant.features.water}</li>
              <li><strong>pH Level:</strong> {plant.plant.features.ph}</li>
              <li><strong>Native Area:</strong> {plant.plant.features.native_area}</li>
              <li><strong>Altitude:</strong> {plant.plant.features.altitude}</li>
            </ul>
          </section>
        )}

        {/* Medicinal Benefits Section */}
        {plant.plant.medicinal_benefits && (
          <section className="mb-6 bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Medicinal Benefits</h2>
            <ul className="list-disc ml-6">
              <li><strong>Stress Relief:</strong> {plant.plant.medicinal_benefits.stress_relief}</li>
              <li><strong>Respiratory Health:</strong> {plant.plant.medicinal_benefits.respiratory_health}</li>
              <li><strong>Heart Health:</strong> {plant.plant.medicinal_benefits.heart_health}</li>
              <li><strong>Immune Boost:</strong> {plant.plant.medicinal_benefits.immune_boost}</li>
            </ul>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
