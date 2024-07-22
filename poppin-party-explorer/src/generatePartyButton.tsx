import React from 'react';

interface GeneratePartyButtonProps {
  onClick: () => void;
}

const GeneratePartyButton = ({ onClick }: GeneratePartyButtonProps) => {
  return (
    <button onClick={onClick} className="generate-button">
      Generate New Party
    </button>
  );
};

export default GeneratePartyButton;