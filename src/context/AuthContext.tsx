import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole, additionalData?: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const register = async (
    email: string,
    password: string,
    name: string,
    role: UserRole,
    additionalData?: any
  ) => {
    try {
      // Validate email format
      if (!email.includes('@')) {
        throw new Error('Неверный формат email');
      }

      // Validate password strength
      if (password.length < 6) {
        throw new Error('Пароль должен быть не менее 6 символов');
      }

      // In a real app, this would be an API call
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        role,
        verified: false,
        createdAt: new Date().toISOString(),
        ...additionalData
      };

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user data
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);

      // Store credentials (in a real app, we'd use secure HTTP-only cookies)
      localStorage.setItem('credentials', JSON.stringify({ email, password }));

    } catch (error) {
      throw error instanceof Error ? error : new Error('Ошибка регистрации');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const storedCredentials = localStorage.getItem('credentials');
      if (!storedCredentials) {
        throw new Error('Пользователь не найден');
      }

      const { email: storedEmail, password: storedPassword } = JSON.parse(storedCredentials);

      if (email !== storedEmail || password !== storedPassword) {
        throw new Error('Неверный email или пароль');
      }

      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        throw new Error('Пользователь не найден');
      }

      setUser(JSON.parse(storedUser));
    } catch (error) {
      throw error instanceof Error ? error : new Error('Ошибка входа');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('credentials');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;