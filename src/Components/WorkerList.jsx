// src/Components/WorkerList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WorkerList() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      const res = await axios.get('/api/users/workers');
      setWorkers(res.data);
    };
    fetchWorkers();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {workers.map(worker => (
        <Link
          to={`/workers/${worker.id}`}
          key={worker.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <h2 className="text-xl font-bold">{worker.name}</h2>
          <p>{worker.serviceType}</p>
          <p className="text-sm text-gray-500">Rating: {worker.rating?.toFixed(1) || 'N/A'}</p>
        </Link>
      ))}
    </div>
  );
}

export default WorkerList;
