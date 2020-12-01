import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav id="navbar">
    <div className="navbar__wrapper">
      <div>
        <Link href="/">
          <a className="navbar__logo">
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>

      <div>
        <Link href="/login">
          <a className="navbar__link">Login</a>
        </Link>
        <Link href="/register">
          <a className="navbar__link">Register</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
