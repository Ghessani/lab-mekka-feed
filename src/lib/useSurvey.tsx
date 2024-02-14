import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Store {
  language: 'AR' | 'FR' | 'EN';
  setLang: (lang: 'AR' | 'FR' | 'EN') => void;
  service: '1111' | '2222' | '3333';
}

export const useSurvey = create(
  persist<Store>(
    (set) => ({
      language: 'EN',
      service: '2222',
      setLang: (language: 'AR' | 'FR' | 'EN') => set({ language }),
    }),
    {
      name: 'survey-storage',
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
