import React from 'react';
import { useAuth } from '../context/AuthContext';
import ClientDashboard from './dashboard/ClientDashboard';
import LawyerDashboard from './dashboard/LawyerDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === 'lawyer' ? <LawyerDashboard /> : <ClientDashboard />;
};

export default Dashboard;