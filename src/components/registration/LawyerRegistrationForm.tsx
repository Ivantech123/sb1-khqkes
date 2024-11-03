import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bot, 
  Phone, 
  Briefcase, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useFormValidation } from '../../hooks/useFormValidation';
import { SocialMedia } from '../../types';
import SocialMediaForm from './SocialMediaForm';
import DocumentVerification from './DocumentVerification';
import PracticeDetails from './PracticeDetails';
import EducationForm from './EducationForm';
import GeographyForm from './GeographyForm';
import CourtCasesForm from './CourtCasesForm';
import ServicesForm from './ServicesForm';

const LawyerRegistrationForm: React.FC = () => {
  const { register } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    specialization: '',
    experience: 0,
    bio: '',
    hourlyRate: 0,
    consultationPrice: 0,
    socialMedia: [] as SocialMedia[],
    education: [],
    geography: {
      city: '',
      region: '',
      courts: [],
      remoteWork: false
    },
    courtCases: [],
    services: [],
    kadArbitrLinks: []
  });

  const { errors, validateField, validateForm } = useFormValidation({
    name: {
      required: true,
      minLength: 2,
      pattern: /^[А-ЯЁа-яё\s-]+$/,
      message: 'Введите корректное ФИО'
    },
    phone: {
      required: true,
      pattern: /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
      message: 'Введите корректный номер телефона'
    },
    email: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Введите корректный email'
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: 'Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, и цифры'
    }
  });

  const updateFormData = (updates: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(formData)) return;
    
    setLoading(true);
    setError(null);

    try {
      await register(
        formData.email,
        formData.password,
        formData.name,
        'lawyer',
        {
          phone: formData.phone,
          specialization: formData.specialization,
          experience: formData.experience,
          bio: formData.bio,
          hourlyRate: formData.hourlyRate,
          consultationPrice: formData.consultationPrice,
          socialMedia: formData.socialMedia,
          education: formData.education,
          geography: formData.geography,
          courtCases: formData.courtCases,
          services: formData.services,
          kadArbitrLinks: formData.kadArbitrLinks,
          verified
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Основное', icon: User, color: 'emerald' },
    { id: 2, title: 'Верификация', icon: Lock, color: 'emerald' },
    { id: 3, title: 'Практика', icon: Briefcase, color: 'blue' },
    { id: 4, title: 'Образование', icon: Bot, color: 'blue' },
    { id: 5, title: 'Опыт', icon: Sparkles, color: 'purple' },
    { id: 6, title: 'Контакты', icon: Phone, color: 'purple' }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">ФИО</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    updateFormData({ name: e.target.value });
                    validateField('name', e.target.value);
                  }}
                  className="form-input pl-10"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    updateFormData({ email: e.target.value });
                    validateField('email', e.target.value);
                  }}
                  className="form-input pl-10"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Телефон</label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    updateFormData({ phone: e.target.value });
                    validateField('phone', e.target.value);
                  }}
                  className="form-input pl-10"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Пароль</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => {
                    updateFormData({ password: e.target.value });
                    validateField('password', e.target.value);
                  }}
                  className="form-input pl-10"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <DocumentVerification
            role="lawyer"
            onVerificationComplete={(isVerified) => setVerified(isVerified)}
          />
        );

      case 3:
        return (
          <PracticeDetails
            data={{
              specialization: formData.specialization,
              experience: formData.experience,
              bio: formData.bio,
              hourlyRate: formData.hourlyRate,
              consultationPrice: formData.consultationPrice,
              kadArbitrLinks: formData.kadArbitrLinks
            }}
            onChange={updateFormData}
          />
        );

      case 4:
        return (
          <div className="space-y-8">
            <EducationForm
              education={formData.education}
              onChange={(education) => updateFormData({ education })}
            />
            <GeographyForm
              geography={formData.geography}
              onChange={(geography) => updateFormData({ geography })}
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <CourtCasesForm
              courtCases={formData.courtCases}
              onChange={(courtCases) => updateFormData({ courtCases })}
            />
            <ServicesForm
              services={formData.services}
              onChange={(services) => updateFormData({ services })}
            />
          </div>
        );

      case 6:
        return (
          <SocialMediaForm
            socialMedia={formData.socialMedia}
            onChange={(socialMedia) => updateFormData({ socialMedia })}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">Регистрация юриста</h1>
          <p className="text-gray-300">
            Создайте профиль с поддержкой AI для эффективного привлечения клиентов
          </p>
        </div>

        <nav className="step-indicator">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.id}>
                <div className="step-item">
                  <button
                    onClick={() => setCurrentStep(step.id)}
                    className={`
                      step-button group
                      ${currentStep === step.id 
                        ? `bg-${step.color}-500 step-button-active ring-${step.color}-400` 
                        : currentStep > step.id
                        ? 'bg-green-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                      }
                    `}
                  >
                    <StepIcon className={`
                      step-icon
                      ${currentStep >= step.id ? 'text-white' : 'text-gray-400'}
                    `} />
                    
                    {currentStep > step.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-full animate-scale-in">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    )}

                    <div className={`
                      absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full
                      transition-all duration-300 opacity-0 group-hover:opacity-100
                      ${currentStep === step.id ? `bg-${step.color}-400` : 'bg-gray-600'}
                    `} />
                  </button>
                  
                  <span className={`
                    step-label
                    ${currentStep === step.id 
                      ? `text-${step.color}-400` 
                      : currentStep > step.id
                      ? 'text-green-400'
                      : 'text-gray-400'
                    }
                  `}>
                    {step.title}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className={`
                    step-connector
                    ${currentStep > index + 1 
                      ? 'bg-green-500' 
                      : 'bg-gray-800'
                    }
                  `} />
                )}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
              <Bot className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>AI анализирует ваши данные для оптимизации профиля</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              {renderStep()}

              {error && (
                <div className="p-4 bg-red-900/50 border border-red-500/50 text-red-400 rounded-lg animate-shake">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="flex items-center gap-2 px-6 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    <span>Назад</span>
                  </button>
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="btn btn-primary flex items-center gap-2 ml-auto group"
                  >
                    <span>Далее</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading || !verified}
                    className={`
                      flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium ml-auto
                      transition-all duration-200
                      ${loading || !verified
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-500'
                      }
                    `}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white" />
                        <span>Регистрация...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Завершить регистрацию</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerRegistrationForm;