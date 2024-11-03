import React from 'react';
import { Clock, MessageSquare, Calendar, FileText } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Добро пожаловать, {user.name}!</h1>
        <p className="text-gray-600">Управляйте своими юридическими делами</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ближайшая консультация</h3>
              <p className="text-sm text-gray-500">Через 2 дня</p>
            </div>
          </div>
          <button className="text-blue-600 text-sm hover:underline">Подробнее</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Активные чаты</h3>
              <p className="text-sm text-gray-500">3 непрочитанных</p>
            </div>
          </div>
          <button className="text-green-600 text-sm hover:underline">Открыть чаты</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Записи на консультации</h3>
              <p className="text-sm text-gray-500">2 предстоящие</p>
            </div>
          </div>
          <button className="text-purple-600 text-sm hover:underline">Календарь</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Мои документы</h3>
              <p className="text-sm text-gray-500">5 документов</p>
            </div>
          </div>
          <button className="text-orange-600 text-sm hover:underline">Просмотреть</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Текущие дела</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Консультация по семейному праву</h3>
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      В процессе
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Юрист: Анна Сергеева
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Обновлено: 2 дня назад</span>
                    <button className="text-blue-600 text-sm hover:underline">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Рекомендуемые юристы</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0">
                <img
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt="Lawyer"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">Иван Петров</h3>
                  <p className="text-sm text-gray-600">Корпоративное право</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;