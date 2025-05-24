import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RatingDisplay from "../Components/RatingDisplay";
import RatingInput from "../Components/RatingInput";

const WorkerDetails = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2345/api/users/worker/${id}`
        );
        setWorker(res.data);
      } catch (err) {
        console.error("Error fetching worker:", err);
      }
    };

    fetchWorker();
  }, [id]);

  if (!worker) {
    return <div className="text-center p-6">Loading worker details...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-2">{worker.name}</h1>
      <p className="text-blue-600 font-semibold mb-2">{worker.serviceType}</p>
      <p className="text-gray-700 mb-4">{worker.bio}</p>
    
      {/* Show rating */}
      <RatingDisplay
        rating={worker.rating || 0}
        totalRatings={worker.totalRatings || 0}
      />

      {/* Allow users to submit a rating */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Rate this Worker</h2>
        <RatingInput workerId={worker._id} />
      </div>
    </div>
  );
};

export default WorkerDetails;
