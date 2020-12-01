import { useState, FormEvent, ChangeEvent } from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="password"
            />
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Login;
