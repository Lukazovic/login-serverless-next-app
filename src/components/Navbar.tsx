import { useContext, useEffect } from 'react';

import AuthContext from '../contexts/authContext';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { signed, user, signOut } = useContext(AuthContext);

  useEffect(() => {}, [user]);
  return (
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
          {signed ? (
            <>
              <Link href="/dashboard">
                <a className="navbar__link">Dashboard</a>
              </Link>
              <button className="navbar__link" onClick={signOut}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="navbar__link">Login</a>
              </Link>
              <Link href="/register">
                <a className="navbar__link">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
