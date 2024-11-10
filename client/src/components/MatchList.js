import React from 'react';

const MatchList = ({ matches }) => (
  <div className="mt-4">
    <h2>Matching Connections</h2>
    <ul>
      {matches.length ? (
        matches.map((match) => (
          <li key={match._id} className="border-b p-2">
            <p><strong>Name:</strong> {match.name}</p>
            <p><strong>Offer:</strong> {match.offer}</p>
            <p><strong>Request:</strong> {match.request}</p>
          </li>
        ))
      ) : (
        <p>No matches found.</p>
      )}
    </ul>
  </div>
);

export default MatchList;
