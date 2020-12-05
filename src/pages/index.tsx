import { useEffect } from 'react';
import userResources from '../services/resources/user';

import Head from '../components/Head';
import Navbar from '../components/Navbar';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const user = await userResources.getUserInfomation();
      console.log({ user });
    };

    fetchData();
  }, []);
  return (
    <div>
      <Head title="Login Serveless" />

      <Navbar />

      <main id="main">
        <h1>Welcome!</h1>
        <h3>Login with serverless functions</h3>
      </main>
    </div>
  );
}
