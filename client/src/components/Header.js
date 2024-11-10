import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Community Platform</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/connections" className="hover:underline">Connections</Link>
          <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
