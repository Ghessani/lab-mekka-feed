'use client';
import Start from '@/components/Start';
import LanguageSwitcher from '@/components/switch-language';
import { useSurvey } from '@/lib/useSurvey';
import { Happy } from '@/components/icones/happy';
import { Normal } from '@/components/icones/normal';
import { Sad } from '@/components/icones/sad';
import { VeryHappy } from '@/components/icones/very-happy';
import { VerySad } from '@/components/icones/very-sad';
import ChoosingSteps from '@/components/ChoosingSteps';
import { use, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Comment from '@/components/comment';
import Contact from '@/components/contact';
import Bill from '@/components/services/Bill';
import Care from '@/components/services/Care';
import Cash from '@/components/services/Cash';
import Emrg from '@/components/services/Emrg';
import Labo from '@/components/services/Labo';
import Recp from '@/components/services/Recp';
import Radl from '@/components/services/Radl';
import Oprt from '@/components/services/Oprt';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { current, language, Timeline, clearAll } = useSurvey();
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    if (current === 0) {
      setProgress(0);
    } else {
      setProgress(Math.floor((current / Timeline.length) * 100));
    }
  }, [current, Timeline]);
  return (
    <AnimatePresence mode='wait'>
      <main
        className='flex w-screen h-screen flex-col overflow-hidden'
        dir={
          language === 'AR'
            ? 'rtl'
            : language === 'EN'
            ? 'ltr'
            : language === 'FR'
            ? 'ltr'
            : 'ltr'
        }
      >
        <header>
          <Progress progress={progress} />
        </header>

        <section className='flex-grow flex flex-col gap-5 justify-start items-center'>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            exit={{ opacity: 0 }}
            className='text-2xl p-3 w-full'
          >
            {Timeline[current] === 'start' && (
              <>
                {language === 'EN'
                  ? 'what is your overall rating?'
                  : language === 'FR'
                  ? 'Quelle est votre note globale?'
                  : language === 'AR'
                  ? 'ما هو تقييمك العام؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'chousingservices' && (
              <>
                {language === 'EN'
                  ? 'Choosing Services'
                  : language === 'FR'
                  ? 'Choisir des services'
                  : language === 'AR'
                  ? 'اختيار الخدمات'
                  : ''}
              </>
            )}
            {Timeline[current] === 'comment' && (
              <>
                {language === 'EN'
                  ? 'Comment'
                  : language === 'FR'
                  ? 'Commentaire'
                  : language === 'AR'
                  ? 'تعليق'
                  : ''}
              </>
            )}
            {Timeline[current] === 'contact' && (
              <>
                {language === 'EN'
                  ? 'Contact'
                  : language === 'FR'
                  ? 'Contact'
                  : language === 'AR'
                  ? 'اتصل'
                  : ''}
              </>
            )}
            {Timeline[current] === 'bill' && (
              <>
                {language === 'EN'
                  ? 'Billing'
                  : language === 'FR'
                  ? 'Facturation'
                  : language === 'AR'
                  ? 'فواتير'
                  : ''}
              </>
            )}
            {Timeline[current] === 'care' && (
              <>
                {language === 'EN'
                  ? 'Care'
                  : language === 'FR'
                  ? 'Soins'
                  : language === 'AR'
                  ? 'رعاية'
                  : ''}
              </>
            )}
            {Timeline[current] === 'cash' && (
              <>
                {language === 'EN'
                  ? 'Cash'
                  : language === 'FR'
                  ? 'Argent'
                  : language === 'AR'
                  ? 'نقد'
                  : ''}
              </>
            )}
            {Timeline[current] === 'emrg' && (
              <>
                {language === 'EN'
                  ? 'Emergency'
                  : language === 'FR'
                  ? 'Urgence'
                  : language === 'AR'
                  ? 'طوارئ'
                  : ''}
              </>
            )}
            {Timeline[current] === 'labo' && (
              <>
                {language === 'EN'
                  ? 'Laboratory'
                  : language === 'FR'
                  ? 'Laboratoire'
                  : language === 'AR'
                  ? 'مختبر'
                  : ''}
              </>
            )}
            {Timeline[current] === 'oprt' && (
              <>
                {language === 'EN'
                  ? 'Operation'
                  : language === 'FR'
                  ? 'Opération'
                  : language === 'AR'
                  ? 'عملية'
                  : ''}
              </>
            )}
            {Timeline[current] === 'radl' && (
              <>
                {language === 'EN'
                  ? 'Radiology'
                  : language === 'FR'
                  ? 'Radiologie'
                  : language === 'AR'
                  ? 'الأشعة'
                  : ''}
              </>
            )}
            {Timeline[current] === 'recp' && (
              <>
                {language === 'EN'
                  ? 'Reception'
                  : language === 'FR'
                  ? 'Réception'
                  : language === 'AR'
                  ? 'استقبال'
                  : ''}
              </>
            )}
          </motion.h1>
          {Timeline[current] === 'start' && <Start />}

          {Timeline[current] === 'chousingservices' && <ChoosingSteps />}
          {Timeline[current] === 'comment' && <Comment />}
          {Timeline[current] === 'contact' && <Contact />}
          {Timeline[current] === 'bill' && <Bill />}
          {Timeline[current] === 'care' && <Care />}
          {Timeline[current] === 'cash' && <Cash />}
          {Timeline[current] === 'emrg' && <Emrg />}
          {Timeline[current] === 'labo' && <Labo />}
          {Timeline[current] === 'oprt' && <Oprt />}
          {Timeline[current] === 'radl' && <Radl />}
          {Timeline[current] === 'recp' && <Recp />}

          {Timeline[current] === 'thankyou' && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center'
            >
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl text-gray-700'
              >
                Thank you for your feedback
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-2xl text-gray-700'
              >
                We are happy to serve you
              </motion.p>
            </motion.div>
          )}
        </section>
        <footer>
          {Timeline[current] === 'start' ? (
            <LanguageSwitcher />
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=' bg-gray-500 text-white rounded-md p-2 mx-10 my-6'
              onClick={() => clearAll()}
            >
              Restart the Survey
            </motion.button>
          )}
        </footer>
      </main>
    </AnimatePresence>
  );
}

function Progress({ progress }: { progress: number }) {
  const { language } = useSurvey();
  return (
    <motion.section
      className='flex p-4 gap-3 items-center border mb-2'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div
        className={
          language === 'EN' || language === 'FR'
            ? ' p-1 border-r pr-2'
            : ' p-1 border-l pl-2'
        }
      >
        {language === 'EN'
          ? 'English'
          : language === 'FR'
          ? 'Français'
          : 'اَلْعَرَبِيَّةُ'}
      </div>
      <div className=' flex justify-between gap-2'>
        <p>Progress</p>
        <div>{progress}%</div>
      </div>

      <div className=' flex-grow h-4  rounded-md bg-gray-200  transition-all duration-500 ease-in-out'>
        <div
          className='h-full bg-blue-500 rounded-md transition-all duration-500 ease-in-out'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.section>
  );
}
