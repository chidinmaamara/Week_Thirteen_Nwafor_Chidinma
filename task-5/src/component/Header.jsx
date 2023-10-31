import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Comment App</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/add-comment">Add Comment</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
