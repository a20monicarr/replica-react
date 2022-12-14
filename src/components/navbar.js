import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav>
        <ul>
            <li><Link to = "../pages/Discover.js"></Link></li>
            <li><Link to = "../pages/Join.js"></Link></li>

        </ul>
    </nav>
  )
}

export default navbar
