import { Lawyer } from '../types';

export const getLawyers = async (): Promise<Lawyer[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    {
      id: '1',
      name: 'Анна Сергеева',
      specialization: 'Семейное право',
      experience: 12,
      rating: 4.9,
      reviewCount: 156,
      location: 'Москва',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500',
      bio: 'Специализируюсь на семейных спорах, разводах и разделе имущества. Имею успешный опыт медиации и досудебного урегулирования конфликтов.',
      cases: 200,
      hourlyRate: 5000,
      consultationPrice: 3000,
      phone: '+7 (999) 123-45-67',
      email: 'anna.sergeeva@legalmail.ru',
      tags: ['Разводы', 'Алименты', 'Раздел имущества'],
      education: [
        {
          institution: 'МГУ им. М.В. Ломоносова',
          degree: 'Юриспруденция',
          year: '2010'
        }
      ],
      services: [
        { name: 'Консультация', price: 3000 },
        { name: 'Составление иска', price: 15000 }
      ],
      geography: {
        city: 'Москва',
        region: 'Московская область',
        courts: ['Пресненский районный суд', 'Тверской районный суд', 'Московский городской суд'],
        remoteWork: true
      },
      courtCases: [
        {
          title: 'Дело о разделе имущества',
          description: 'Успешное представление интересов клиента в споре о разделе совместно нажитого имущества',
          court: 'Пресненский районный суд',
          date: '2023-12-15',
          result: 'Дело выиграно',
          category: 'Семейные споры'
        }
      ]
    },
    {
      id: '2',
      name: 'Дмитрий Волков',
      specialization: 'Корпоративное право',
      experience: 15,
      rating: 4.8,
      reviewCount: 203,
      location: 'Санкт-Петербург',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80&w=500',
      bio: 'Эксперт в области корпоративного права с опытом работы в крупнейших компаниях. Специализируюсь на сделках M&A и корпоративных спорах.',
      cases: 300,
      hourlyRate: 7000,
      consultationPrice: 5000,
      phone: '+7 (999) 234-56-78',
      email: 'dmitry.volkov@legalmail.ru',
      tags: ['Корпоративное право', 'M&A', 'Договорное право'],
      education: [
        {
          institution: 'СПбГУ',
          degree: 'Юриспруденция',
          year: '2008'
        }
      ],
      services: [
        { name: 'Консультация', price: 5000 },
        { name: 'Правовой аудит', price: 50000 }
      ],
      geography: {
        city: 'Санкт-Петербург',
        region: 'Ленинградская область',
        courts: ['Арбитражный суд г. Санкт-Петербурга', 'Московский районный суд'],
        remoteWork: true
      },
      courtCases: [
        {
          title: 'Корпоративный спор',
          description: 'Успешное представление интересов клиента в споре между акционерами',
          court: 'Арбитражный суд г. Санкт-Петербурга',
          date: '2023-11-20',
          result: 'Дело выиграно',
          category: 'Корпоративные споры'
        }
      ]
    }
  ];
};