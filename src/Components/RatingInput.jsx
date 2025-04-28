import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const RatingInput = ({ workerId }) => {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submitRating = async () => {
    try {
      await axios.post(`/api/ratings/${workerId}`, { rating: selected }); // ✅ corrected path
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting rating', err);
    }
  };

  return (
    <div className="mt-4">
      {submitted ? (
        <p className="text-green-600">Thanks for rating!</p>
      ) : (
        <>
          <p className="text-sm text-gray-700">Rate this worker:</p>
          <div className="flex space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map(num => (
              <FaStar
                key={num}
                className={`cursor-pointer ${selected >= num ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => setSelected(num)}
              />
            ))}
          </div>
          <button
            onClick={submitRating}
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={!selected}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default RatingInput;
