import React, { useContext } from 'react';
import AuthContext from '../contexts/authContext';

import Head from '../components/Head';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

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
