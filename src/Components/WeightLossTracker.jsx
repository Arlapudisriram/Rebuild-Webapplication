import React, { useState, useEffect } from "react";
import axios from "axios";

function WeightLossTracker() {
  const [weight, setWeight] = useState("");
  const [log, setLog] = useState([]);
  const [points, setPoints] = useState(0);

  const firebaseURL = "https://rebuild-fe1f3-default-rtdb.asia-southeast1.firebasedatabase.app/";

 
  const handleAddEntry = async () => {
    if (!weight) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      weight: parseFloat(weight),
    };

    try {
   
      await axios.post(`${firebaseURL}/weightLog.json`, newEntry);

      
      setLog([...log, newEntry]);
      setWeight("");
      const newPoints = points + 10;
      setPoints(newPoints);


      await axios.put(`${firebaseURL}/points.json`, newPoints);
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logResponse = await axios.get(`${firebaseURL}/weightLog.json`);
        const pointsResponse = await axios.get(`${firebaseURL}/points.json`);

        const data = logResponse.data
          ? Object.values(logResponse.data)
          : [];

        setLog(data);
        setPoints(pointsResponse.data || 0);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Weight Loss Tracker
        </h1>
        <p className="text-gray-600 mb-4">
          Log your daily weight and earn points for consistency!
        </p>

       
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter today's weight (kg)"
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddEntry}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </div>

   
        <div className="bg-green-100 text-green-800 rounded-lg p-3 mb-4 font-medium">
          ⭐ Total Points: {points}
        </div>


        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2 text-green-700">
            Progress Log
          </h2>
          {log.length === 0 ? (
            <p className="text-gray-500">No entries yet. Start logging today!</p>
          ) : (
            <ul className="space-y-2">
              {log.map((entry, index) => (
                <li
                  key={index}
                  className="bg-green-50 border border-green-200 rounded-lg p-2 flex justify-between"
                >
                  <span>{entry.date}</span>
                  <span className="font-semibold">{entry.weight} kg</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeightLossTracker;
