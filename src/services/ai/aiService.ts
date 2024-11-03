import { model } from './aiConfig';
import { handleGreeting, handleFarewell, handleLawyerSearch, handleSpecializationSearch } from './messageHandlers';
import { analyzeDocument } from './documentAnalysis';
import { AIResponse } from './types';
import { getLawyers } from '../lawyerService';

const SPECIALIZATIONS = [
  'семейное право',
  'корпоративное право',
  'уголовное право',
  'гражданское право'
];

export const handleUserQuery = async (query: string): Promise<AIResponse> => {
  try {
    const lowerQuery = query.toLowerCase();

    // Handle greetings
    if (lowerQuery.match(/^(привет|здравствуй|добрый|доброе|здрасте)/)) {
      return handleGreeting();
    }

    // Handle farewells
    if (lowerQuery.match(/^(пока|до свидания|прощай)/)) {
      return handleFarewell();
    }

    // Handle lawyer search
    if (lowerQuery.includes('найти юриста') || lowerQuery.includes('поиск юриста')) {
      return await handleLawyerSearch();
    }

    // Handle specialization queries
    for (const spec of SPECIALIZATIONS) {
      if (lowerQuery.includes(spec)) {
        return await handleSpecializationSearch(spec);
      }
    }

    // Handle lawyer name search
    const lawyers = await getLawyers();
    const matchedLawyer = lawyers.find(
      lawyer => lawyer.name.toLowerCase().includes(lowerQuery)
    );

    if (matchedLawyer) {
      return {
        message: 'Нашел информацию о юристе:',
        type: 'lawyers',
        data: [matchedLawyer]
      };
    }

    // Use AI for general queries
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();

    return {
      message: text,
      type: 'text'
    };

  } catch (error) {
    console.error('AI Error:', error);
    return {
      message: 'Извините, произошла ошибка. Попробуйте переформулировать вопрос или обратиться к нашим специалистам.',
      type: 'error'
    };
  }
};

export { analyzeDocument };