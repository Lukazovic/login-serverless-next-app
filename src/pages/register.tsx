import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

import validateUserCreate from '../app/validators/userCreate';
import { useAuth } from '../contexts/authContext';

import { IUser } from '../app/helpers/interfaces/user';

const Register: React.FC = () => {
  const { signUp, signed } = useAuth();
  const router = useRouter();

  if (signed) {
    router.push('/dashboard');
  }

  const [formData, setFormData] = useState<IUser>({
    name: '',
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { errors } = await validateUserCreate(formData);

    if (errors) {
      alert(errors[0]);
      return;
    }

    signUp(formData);
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
