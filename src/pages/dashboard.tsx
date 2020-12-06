import React from 'react';
import { useAuth } from '../contexts/authContext';

import Head from '../components/Head';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <Head title="Login Serveless" />

      <Navbar />

      <main id="dashboard">
        <h3>Name: {user?.name}</h3>
        <h4>Email: {user?.email}</h4>
      </main>
    </div>
  );
};

export default Dashboard;
