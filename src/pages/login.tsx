import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('api/v1/users/session', formData);
      console.log(response.data);
      alert('Success');
      router.push('/');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <Head title="Login" />

      <Navbar />

      <main id="login">
        <div className="login__wrapper">
          <Form title="Login" buttonText="Login" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Login;
