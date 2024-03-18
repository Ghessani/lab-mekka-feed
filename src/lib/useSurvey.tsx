import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type serviceType =
  | 'recp'
  | 'emrg'
  | 'bill'
  | 'cash'
  | 'care'
  | 'labo'
  | 'oprt'
  | 'radl';

type reactionType =
  | 'ABSOLUTELY_DISATISFIED'
  | 'DISATISFIED'
  | 'OK'
  | 'SATISFIED'
  | 'EXTREMELY_SATISFIED';

type LanguageType = 'EN' | 'FR' | 'AR';

interface Store {
  language: 'AR' | 'FR' | 'EN';
  query: {
    email?: string;
    phone?: string;
    message?: string;
    Language?: LanguageType;
    overallRating: reactionType;
    recp?: reactionType;
    emrg?: reactionType;
    bill?: reactionType;
    cash?: reactionType;
    care?: reactionType;
    labo?: reactionType;
    oprt?: reactionType;
    radl?: reactionType;
  };
  setQuerry: (query: {
    email?: string;
    phone?: string;
    message?: string;
    Language?: LanguageType;
    overallRating: reactionType;
    recp?: reactionType;
    emrg?: reactionType;
    bill?: reactionType;
    cash?: reactionType;
    care?: reactionType;
    labo?: reactionType;
    oprt?: reactionType;
    radl?: reactionType;
  }) => void;
  setLang: (lang: 'AR' | 'FR' | 'EN') => void;
  service: {
    recp: false;
    emrg: false;
    bill: false;
    cash: false;
    care: false;
    labo: false;
    oprt: false;
    radl: false;
  };
  setService: (
    key: 'recp' | 'emrg' | 'bill' | 'cash' | 'care' | 'labo' | 'oprt' | 'radl',
    value: boolean
  ) => void;
  current: number;
  setCurrent: (current: number) => void;
  Timeline: (
    | 'start'
    | 'chousingservices'
    | 'comment'
    | 'thankyou'
    | 'contact'
    | 'bill'
    | 'cash'
    | 'care'
    | 'labo'
    | 'oprt'
    | 'radl'
    | 'emrg'
    | 'recp'
  )[];
  setTimeLine: (
    Timeline: (
      | 'start'
      | 'chousingservices'
      | 'comment'
      | 'thankyou'
      | 'contact'
      | 'bill'
      | 'cash'
      | 'care'
      | 'labo'
      | 'oprt'
      | 'radl'
      | 'emrg'
      | 'recp'
    )[]
  ) => void;
  clearAll: () => void;
}

export const useSurvey = create(
  persist<Store>(
    (set) => ({
      language: 'EN',
      service: {
        recp: false,
        emrg: false,
        bill: false,
        cash: false,
        care: false,
        labo: false,
        oprt: false,
        radl: false,
      },
      query: {
        overallRating: 'OK',
      },
      current: 0,
      Timeline: ['start', 'chousingservices', 'comment', 'thankyou'],
      setTimeLine: (Timeline) => set({ Timeline }),
      setCurrent: (current) => set({ current }),
      clearAll: () =>
        set({
          language: 'EN',
          service: {
            recp: false,
            emrg: false,
            bill: false,
            cash: false,
            care: false,
            labo: false,
            oprt: false,
            radl: false,
          },
          query: {
            overallRating: 'OK',
          },
          current: 0,
          Timeline: ['start', 'chousingservices', 'comment', 'thankyou'],
        }),
      setQuerry: (query) => set({ query }),
      setService: (key, value) => {
        set((state) => {
          return {
            service: { ...state.service, [key]: value },
          };
        });
      },
      setLang: (language: 'AR' | 'FR' | 'EN') => set({ language }),
    }),
    {
      name: 'survey-storage',
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

/*
services :
 + reception / admission  : recp
 + emergency              : emrg
 + billing                : bill
 + cashier                : cash
 + care / treatment       : care
 + laboratory             : labo
 + operating room         : oprt
 + radiology              : radl
*/
