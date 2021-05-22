import React from "react";
import '../styles/main.css';

const Footer = () => (
  <footer className="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-blue-300 bg-opacity-75 pin-b">
    <div className="logo" />
    <p>
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p>
  </footer>
);

export default Footer;
