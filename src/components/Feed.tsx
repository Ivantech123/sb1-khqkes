import React, { useState, useEffect } from 'react';
import { Lawyer } from '../types';
import Filters from './Filters';
import LawyerList from './LawyerList';
import AIAssistant from './ai/AIAssistant';
import { getLawyers } from '../services/lawyerService';
import LawyerDetailModal from './LawyerDetailModal';

const Feed: React.FC = () => {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [filters, setFilters] = useState({
    specialization: '',
    location: '',
    priceRange: '',
    experience: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const data = await getLawyers();
        setLawyers(data);
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, []);

  const filteredLawyers = lawyers.filter(lawyer => {
    if (filters.specialization && lawyer.specialization !== filters.specialization) return false;
    if (filters.location && lawyer.geography?.city !== filters.location) return false;
    if (filters.experience) {
      const [min, max] = filters.experience.split('-').map(Number);
      if (max && (lawyer.experience < min || lawyer.experience > max)) return false;
      if (!max && lawyer.experience < min) return false;
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max && (lawyer.consultationPrice < min || lawyer.consultationPrice > max)) return false;
      if (!max && lawyer.consultationPrice < min) return false;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Filters
        filters={filters}
        onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
        lawyers={lawyers}
      />
      
      <LawyerList 
        lawyers={filteredLawyers}
        onViewProfile={setSelectedLawyer}
      />

      {selectedLawyer && (
        <LawyerDetailModal
          lawyer={selectedLawyer}
          isOpen={true}
          onClose={() => setSelectedLawyer(null)}
        />
      )}
    </div>
  );
};

export default Feed;