import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeCard({ data,imageSrc, plantName, scientificName, description }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/search/info', {
      state: {
        plant:data,
        imageSrc,
        plantName,
        scientificName,
        description
      }
    });
  };

  return (
    <div className="home-card">
      <div className="flex flex-col rounded-2xl w-84 bg-[#fffff00] shadow-xl">
        <figure className="flex justify-center items-center rounded-2xl">
          <img src={imageSrc} alt={`${plantName} Preview`} className="rounded-t-2xl h-150px w-250px" />
        </figure>
        <div className="flex flex-col p-8 bg-[#ffffffff] rounded-b-2xl">
          <div className="text-3xl font-bold text-[#485971] pb-6">{plantName}</div>
          <div className="text-sm italic text-[#485971] pb-4">{scientificName}</div>
          <div className="text-base text-[#485262]">{description}</div>
          <div className="flex justify-end pt-6 shadow-xl">
            <button
              className="bg-[#4a9950] text-[#ffffff] w-full font-bold text-lg uppercase p-3 rounded-lg hover:bg-gray-800 active:scale-95 transition-transform transform"
              onClick={handleLearnMore}
            >
              Learn More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
