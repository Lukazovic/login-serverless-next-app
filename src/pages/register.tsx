import { useState, FormEvent, ChangeEvent } from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
