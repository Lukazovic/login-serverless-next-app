import { AuthProvider } from '../contexts/authContext';

import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/Form.css';
import '../styles/Home.css';
import '../styles/Login.css';
import '../styles/Register.css';
import '../styles/Dashboard.css';
import '../styles/Loading.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
