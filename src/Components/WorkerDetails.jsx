// src/Components/WorkerDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RatingDisplay from './RatingDisplay';
import RatingInput from './RatingInput';
import { Star } from 'lucide-react';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        fill={i <= rating ? '#facc15' : 'none'}
        stroke="#facc15"
        className="w-5 h-5"
      />
    );
  }
  return stars;
};
const [rating, setRating] = useState(0);
const [review, setReview] = useState('');

const submitRating = async () => {
  try {
    const response = await axios.post(
      'http://localhost:2345/api/ratings',
      {
        workerId: worker._id,
        rating,
        review,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // If using auth
        },
      }
    );
    alert('Rating submitted!');
    setRating(0);
    setReview('');
  } catch (err) {
    console.error(err);
    alert('Failed to submit rating.');
  }
};

function WorkerDetail() {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchWorker = async () => {
      const res = await axios.get(`/api/users/workers/${id}`);
      setWorker(res.data);
    };
    fetchWorker();
  }, [id]);

  const handleRatingSubmit = async () => {
    try {
      await axios.post(`/api/ratings`, { workerId: id, rating });
      setMessage('Rating submitted!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit rating');
    }
  };

  if (!worker) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{worker.name}</h2>
      <p>{worker.serviceType}</p>
      <p>{worker.bio}</p>
      <p>Experience: {worker.experience} years</p>
      <p>Rating: {worker.rating?.toFixed(1)} / 5</p>

      <RatingDisplay rating={worker.rating} totalRatings={worker.totalRatings} />
      <RatingInput workerId={worker.id} />

      <div className="mt-4">
        <label className="block text-sm mb-1">Leave a rating:</label>
        <input
          type="number"
          min={1}
          max={5}
          className="border p-2 rounded w-full"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
          onClick={handleRatingSubmit}
        >
          Submit
        </button>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
      </div>
      
    </div>
  );
}

export default WorkerDetail;
