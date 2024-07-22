import React from 'react';
import { Party } from './types';

interface PartyCardProps {
  party: Party;
}

const PartyCard = ({ party }: PartyCardProps) => {
  return (
    <div className="party-card">
      <img src={party.bannerImage} alt={party.name} className="party-image" />
      <div className="party-info">
        <h2 className="party-name">{party.name}</h2>
        <p className="party-detail">Date: {party.startDate.toLocaleDateString()}</p>
        {party.endDate && <p className="party-detail">End: {party.endDate.toLocaleDateString()}</p>}
        <p className="party-price">${party.price}</p>
        <p className="party-going">{party.amountGoing} people going</p>
      </div>
    </div>
  );
};

export default PartyCard;