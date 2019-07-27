import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
      <header className="header">
        <div className="myName">Andre Dantas</div>
        <nav className="navigation">
          <ul className="links">
            <li>Work</li>
            <li>Get a Quote</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
  );
}
