import { GoogleGenerativeAI } from '@google/generative-ai';

export const genAI = new GoogleGenerativeAI('AIzaSyDJqwZWxXPruQJ_UWxXv9kpF7tWYgbBzPM');
export const model = genAI.getGenerativeModel({ model: 'gemini-pro' });