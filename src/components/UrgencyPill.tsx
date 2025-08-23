import React from 'react';

export const UrgencyPill: React.FC = () => {
  return (
    <div className="urgency-pill-container">
      <div className="urgency-pill">
        <span className="icon">⏰</span>
        <span>OFERTA DO DIA - <strong>Restam 12 Acessos</strong></span>
        <span className="icon">🎉</span>
      </div>
    </div>
  );
};