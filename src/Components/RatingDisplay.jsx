import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RatingDisplay = ({ rating, totalRatings }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-500" />)}
      {hasHalfStar && <FaStar className="text-yellow-400 opacity-50" />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} className="text-gray-400" />)}
      <span className="text-sm text-gray-600 ml-2">({totalRatings})</span>
    </div>
  );
};

export default RatingDisplay;
