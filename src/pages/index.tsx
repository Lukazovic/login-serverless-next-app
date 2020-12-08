import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';

const Home: React.FC = () => (
  <div>
    <Head title="Login Serveless" />

    <Navbar />

    <main id="main">
      <h1>Welcome!</h1>
      <h3>Login with serverless functions</h3>
    </main>
  </div>
);

export default Home;
