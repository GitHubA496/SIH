import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Correct path for your Navbar component
import HomeCard from '../Frontpage/home-card'; // Correct path for your HomeCard component
import Footer from '../components/Footer';

// Image source array
const imgsrc = [
  "https://kj1bcdn.b-cdn.net/media/60443/tulsi-1.jpg",
  "https://th.bing.com/th/id/OIP.6-fWwrsyU8fwqp-GjvDnqgHaFP?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.1DWh3cZfZ_iRGzpJFPzX3wHaFj?rs=1&pid=ImgDetMain",
  "https://cdn.diys.com/wp-content/uploads/2021/03/curcuma-tumeric-2-e1614849888923.jpg",
  "https://th.bing.com/th/id/OIP.-VAhGakvfF3uhTskYnrHZQHaE5?rs=1&pid=ImgDetMain",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pfefferminze_natur_peppermint.jpg/330px-Pfefferminze_natur_peppermint.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/EchinaceaPurpureaMaxima1a.UME.JPG/330px-EchinaceaPurpureaMaxima1a.UME.JPG",
  "https://th.bing.com/th/id/OIP.iwXRkBzVwj0-YPaYZD3-XgHaE5?rs=1&pid=ImgDetMain",
  "https://cdn.shopify.com/s/files/1/0058/0252/4783/files/milk-thistle-silybum-marianum-alternate.jpg",
  "https://cdn.shopify.com/s/files/1/0506/7037/0997/articles/HerbalLibrary_Hero_Valerian_1400x1400_d733fff2-bc48-4739-8aa4-c4ccb6434354.jpg?v=1662261053"
];

// App Component
export default function App() {
  const [plants, setPlants] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  
  // Function to fetch plants from the API
  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:5000/plants');
      const data = await response.json();

      // Filter out any null values from the fetched data
      const filteredData = data.filter(plant => plant !== null);

      // Set the filtered data to the state
      setPlants(filteredData);

      // Log only if there are valid plants
      if (filteredData.length > 0) {
        console.log('Fetched plant data:', filteredData);
      }
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  // useEffect to fetch plants on component mount
  useEffect(() => {
    fetchPlants();
  }, []);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    const filtered = plants.filter(plant =>
      plant.plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.plant.overview.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  // Determine which plants to display
  const displayPlants = filteredCards.length > 0 ? filteredCards : plants;

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 " >
        {displayPlants.length > 0 ? (
          displayPlants.map((plant, index) => (
            <HomeCard
              data={plant}
              key={plant._id}
              plantName={plant.plant.name}
              scientific_name={plant.plant.scientific_name}
              description={plant.plant.overview.description}
              imageSrc={imgsrc[plant._id - 1]} 
            />
          ))
        ) : (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
