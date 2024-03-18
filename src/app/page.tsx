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
  const { current, setCurrent, Timeline, clearAll } = useSurvey();
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
      <main className='flex w-screen h-screen flex-col overflow-hidden'>
        <header>
          <Progress progress={progress} />
        </header>

        <section className='flex-grow flex justify-center items-center'>
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

const Question = {
  start:
    "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  'choosing-service':
    "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  choosingaservice: 'choose up to 3 services to rate your experience today',
  comment:
    "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  contact:
    "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  thanks:
    "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  bill: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  cash: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  care: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  labo: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  oprt: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  radl: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  emrg: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
  recp: "Dans quelle mesure êtes-vous satisfait de votre expérience aujourd'hui?",
};

function Progress({ progress }: { progress: number }) {
  return (
    <motion.section
      className='flex p-4 gap-3 items-center border mb-2'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -100 }}
    >
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
