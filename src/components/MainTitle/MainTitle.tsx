import React from 'react';
import './MainTitle.scss';

export const MainTitle: React.FC = () => {
  return (
    <div className="mainTitle">
      <h1 className="mainTitle-text">An Awesome Programmer!</h1>
      <h2 className="mainTitle-subtext">Let me do stuff for you... but pay me as well pls!</h2>
    </div>
  );
}
