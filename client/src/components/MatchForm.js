import React, { useState } from 'react';
import api from '../api/api';

const MatchForm = ({ setMatches }) => {
  const [name, setName] = useState('');
  const [offer, setOffer] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/connections/match', { name, offer, request });
      setMatches(response.data.matches);
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Offer" value={offer} onChange={(e) => setOffer(e.target.value)} />
      <input type="text" placeholder="Request" value={request} onChange={(e) => setRequest(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Find Connections</button>
    </form>
  );
};

export default MatchForm;
