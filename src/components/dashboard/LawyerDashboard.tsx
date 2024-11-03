import React from 'react';
import { Users, DollarSign, BarChart, Calendar, MessageSquare, FileText } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const LawyerDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Кабинет юриста</h1>
        <p className="text-gray-600">Управляйте своей практикой</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Активные клиенты</p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Доход за месяц</p>
              <h3 className="text-2xl font-bold text-gray-900">146,800₽</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Успешные дела</p>
              <h3 className="text-2xl font-bold text-gray-900">89%</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Консультации сегодня</p>
              <h3 className="text-2xl font-bold text-gray-900">5</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Ближайшие консультации</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Первичная консультация</h3>
                        <p className="text-sm text-gray-600">Иван Иванов</p>
                      </div>
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        14:00
                      </span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:underline">
                    Детали
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Текущие дела</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Семейный спор</h3>
                        <p className="text-sm text-gray-600">Стадия: Подготовка документов</p>
                      </div>
                      <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        В процессе
                      </span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:underline">
                    Открыть
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Сообщения</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="Client"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">Мария Петрова</h3>
                    <p className="text-sm text-gray-600 truncate">
                      Добрый день, хотела уточнить...
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">14:23</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-blue-600 hover:underline">
              Все сообщения
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Статистика</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Просмотры профиля</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Новые клиенты</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Рейтинг</span>
                <span className="font-medium">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;