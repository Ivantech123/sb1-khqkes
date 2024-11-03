import React, { useState } from 'react';
import { Scale, LogOut, User, MessageSquare, Bell, Sparkles, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MessagesModal from './MessagesModal';
import NotificationsModal from './NotificationsModal';
import AIAssistantModal from './ai/AIAssistantModal';
import SettingsModal from './SettingsModal';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [showMessagesModal, setShowMessagesModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">LegalMatch</span>
            </div>
            
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <button
                    onClick={() => setShowAIModal(true)}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Sparkles className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowMessagesModal(true)}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button
                    onClick={() => setShowNotificationsModal(true)}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <User className="w-5 h-5" />
                      <span>{user.name}</span>
                    </button>
                    
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                        <button
                          onClick={() => {
                            setShowSettingsModal(true);
                            setShowUserMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <Settings className="w-4 h-4" />
                          Настройки
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          Выйти
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <button 
                  onClick={() => setShowSettingsModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Войти
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <MessagesModal 
        isOpen={showMessagesModal}
        onClose={() => setShowMessagesModal(false)}
      />

      <NotificationsModal
        isOpen={showNotificationsModal}
        onClose={() => setShowNotificationsModal(false)}
      />

      <AIAssistantModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
      />

      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </>
  );
};

export default Navbar;