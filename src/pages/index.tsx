import Head from '../components/Head';
import Navbar from '../components/Navbar';

export default function Home() {
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
