// src/components/Filters.jsx

import { useState } from 'react';
import './Filters.css';

function Filters({ applyFilters }) {
  const [cuisine, setCuisine] = useState('');

  const handleApply = () => {
    applyFilters(cuisine);
  };

  return (
    <div className="filters">
      <select onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
        <option value="">Select Cuisine</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="Mexican">Mexican</option>
        {/* Add more cuisines as needed */}
      </select>
      <button onClick={handleApply}>Apply Filters</button>
    </div>
  );
}

export default Filters;
