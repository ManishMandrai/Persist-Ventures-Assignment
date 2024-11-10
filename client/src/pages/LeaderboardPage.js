import React from "react";
import Leaderboard from "../components/Leaderboard";

function LeaderboardPage() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
      <Leaderboard />
    </div>
  );
}

export default LeaderboardPage;
