import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const FIREBASE_URL =
  "https://rebuild-fe1f3-default-rtdb.asia-southeast1.firebasedatabase.app/";

function UserProgress() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await axios.get(`${FIREBASE_URL}/progress.json`);
        if (res.data) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };
    fetchProgress();
  }, []);

 
  const handleJoinBoard = async () => {
    if (!username.trim()) {
      setMessage("Please enter your name before joining.");
      return;
    }

    setIsJoining(true);
    setMessage("");

    try {
      const newMember = {
        username,
        joinedAt: new Date().toISOString(),
      };

      await axios.post(`${FIREBASE_URL}/leadershipBoard.json`, newMember);
      setMessage("✅ You’ve successfully joined the Leadership Board!");
      setUsername("");
    } catch (error) {
      console.error("Error joining board:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
    
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        User Progress Dashboard
      </h1>

   
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Progress Over Time
        </h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#4B5563" />
              <YAxis domain={[0, 100]} stroke="#4B5563" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    
      <div className="mt-10 w-full max-w-2xl bg-blue-600 text-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Join the Public Leadership Board
        </h3>
        <p className="text-blue-100 mb-6">
          Showcase your achievements and compete with others in the community leaderboard.
        </p>

        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 rounded-md text-gray-800 w-64"
          />
          <button
            onClick={handleJoinBoard}
            disabled={isJoining}
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            {isJoining ? "Joining..." : "Join Now"}
          </button>
          {message && <p className="text-sm text-white mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default UserProgress;
