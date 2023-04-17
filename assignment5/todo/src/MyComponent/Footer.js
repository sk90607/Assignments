import React from 'react'

import { Link } from 'react-router-dom';

export const Footer = React.memo(() => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </footer>
  )
});
