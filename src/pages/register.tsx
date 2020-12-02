import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      alert('Password not valid');
      return;
    }

    try {
      const response = await axios.post('/api/v1/users', formData);
      console.log(response.data);
      router.push('/login');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <Head title="Register" />

      <Navbar />

      <main id="register">
        <div className="register__wrapper">
          <Form title="Register" buttonText="Register" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
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
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
            />
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Register;
