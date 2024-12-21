// src/pages/Restaurants.jsx

import { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Filters from '../components/Filters';
import restaurants from '../data/data.js'; // Import the data
import './Restaurants.css';

function Restaurants() {
  const [filteredList, setFilteredList] = useState(restaurants); // Use the imported data

  const applyFilters = (cuisine) => {
    const filtered = cuisine
      ? restaurants.filter((restaurant) => restaurant.cuisine === cuisine)
      : restaurants; // Show all if no filter is applied
    setFilteredList(filtered);
  };

  return (
    <div className="restaurants-page">
      <Filters applyFilters={applyFilters} />
      <div className="restaurant-grid">
        {filteredList.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
