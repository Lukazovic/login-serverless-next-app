import React, { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/router';

import UserResources from '../services/resources/user';
import localStorageResources from '../services/resources/localStorage';
import authResources from '../services/resources/auth';
import request from '../services/tools/request';

import Loading from '../components/Loading';

interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: number;
}

interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(userData: object): void;
  signOut(): void;
  signUp(userDate: object): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorageResources.getAuthToken();
    const userId = localStorageResources.getUserId();

    if (!token || !userId) {
      setLoading(false);
      return;
    }

    const getUser = async () => {
      try {
        request.setTokenHeaders(token);
        const response = await UserResources.getUserInfomation(userId);
        setUser(response.data);
      } catch (err) {
        localStorageResources.clearAuthToken();
        localStorageResources.clearUserId();
      }

      setLoading(false);
    };
    getUser();
  }, []);

  const signIn = async (userData: object) => {
    try {
      const response = await authResources.signIn(userData);
      const { token, user } = response.data;

      localStorageResources.setAuthToken(token);
      localStorageResources.setUserId(user.id);
      request.setTokenHeaders(token);
      setUser(user);
      router.push('/');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const signOut = () => {
    localStorageResources.clearAuthToken();
    localStorageResources.clearUserId();
    setUser(null);
  };

  const signUp = async (userData: object) => {
    try {
      await authResources.signUp(userData);
      alert('success');
      router.push('/login');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
