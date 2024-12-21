// src/components/RestaurantCard.jsx
import './RestaurantCard.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating} ★</p>
    </div>
  );
}

export default RestaurantCard;
