import React from "react";

function Leaderboard() {
  const mockLeaderboardData = [
    { id: 1, name: "Jhon", connections: 15 },
    { id: 2, name: "Bob", connections: 12 },
    { id: 3, name: "Charlie", connections: 10 },
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <ul>
        {mockLeaderboardData.map((user) => (
          <li key={user.id} className="p-2 border-b border-gray-200">
            {user.name} - Connections: {user.connections}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
