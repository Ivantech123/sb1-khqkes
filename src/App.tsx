import React from 'react';
import { Scale } from 'lucide-react';
import LawyerList from './components/LawyerList';
import LawyerDetailModal from './components/LawyerDetailModal';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import RoleSelection from './components/RoleSelection';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';

const App = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-900">
            <RoleSelection />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {user.role === 'lawyer' ? <Dashboard /> : <Feed />}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;