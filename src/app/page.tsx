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
import ThankYou from '@/components/ThankYou';

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
      setProgress(Math.floor((current / (Timeline.length - 1)) * 100));
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
                  ? 'How satisfied are you with your experience today ?'
                  : language === 'FR'
                  ? 'Êtes-vous satisfait de votre expérience aujourd\'hui ?'
                  : language === 'AR'
                  ? 'ما مدى رضاك عن تجربتك اليوم ؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'chousingservices' && (
              <>
                {language === 'EN'
                  ? 'Which department in the hospital would you like to provide us with feedback on ?'
                  : language === 'FR'
                  ? 'Pour quel service de l\'établissement hospitalier souhaitez-vous nous fournir des commentaires ?'
                  : language === 'AR'
                  ? 'أي قسم في المستشفى تود أن تقدم لنا ملاحظات حوله ؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'comment' && (
              <>
                {language === 'EN'
                  ? ' Do you still have something on your mind ?<br />Your personal data will be processed according to our privacy policy.'
                  : language === 'FR'
                  ? 'Souhaiteriez-vous exprimer d\'autres pensées ou préoccupations à ce sujet ? \n '
                  : language === 'AR'
                  ? '\n هل ترغب في التعبير عن أفكار أو مخاوف أخرى بشأن هذا الموضوع؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'contact' && (
              <>
                {language === 'EN'
                  ? 'Would you like us to contact you for further information or assistance ? ' 
                  : language === 'FR'
                  ? 'Souhaitez-vous que nous vous contactions pour plus d\'informations ou d\'assistance ?'
                  : language === 'AR'
                  ? 'هل تود أن نتواصل معك للحصول على مزيد من المعلومات أو المساعدة؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'bill' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Billing ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience dans la facturation ?'
                  : language === 'AR'
                  ? 'كم كنت راضياً عن تجربتك في الفوترة ؟' 
                  : ''}
              </>
            )}
            {Timeline[current] === 'care' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Care ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience dans le département des soins ?'
                  : language === 'AR'
                  ? 'كم كنت راضيًا عن تجربتك في قسم الرعاية ؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'cash' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Cashier ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience au niveau de la caisse ?'
                  : language === 'AR'
                  ? ' كم كنت راضيًا عن تجربتك في الصراف ؟ '
                  : ''}
              </>
            )}
            {Timeline[current] === 'emrg' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Emergency departement ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience dans le service des urgences ?'
                  : language === 'AR'
                  ? ' كم كنت راضيًا عن تجربتك في قسم الطوارئ ؟' 
                  : ''}
              </>
            )}
            {Timeline[current] === 'labo' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Laboratory ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience au laboratoire ?'
                  : language === 'AR'
                  ? 'كم كنت راضيًا عن تجربتك في المختبر ؟'
                  : ''}
              </>
            )}
            {Timeline[current] === 'oprt' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Operating departemet ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience dans le service de chirurgie ?'
                  : language === 'AR'
                  ? 'كم كنت راضيًا عن تجربتك في قسم العمليات ؟' 
                  : ''}
              </>
            )}
            {Timeline[current] === 'radl' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Radiology ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience en radiologie ?'
                  : language === 'AR'
                  ? ' كم كنت راضيًا عن تجربتك في التصوير الطبي ؟ '
                  : ''}
              </>
            )}
            {Timeline[current] === 'recp' && (
              <>
                {language === 'EN'
                  ? 'How satisfied were you with your experience in the Reception ?'
                  : language === 'FR'
                  ? 'À quel point étiez-vous satisfait de votre expérience à l\'accueil ?'
                  : language === 'AR'
                  ? '  كم كنت راضيًا عن تجربتك في الاستقبال؟'
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

          {Timeline[current] === 'thankyou' && <ThankYou />}
        </section>
        <footer>
          {Timeline[current] === 'start' ? (
            <LanguageSwitcher />
          ) : Timeline[current] === 'thankyou' ? (
            ''
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=' bg-red-400 hover:bg-red-500 text-white rounded-md p-2 mx-10 my-6'
              onClick={() => clearAll()}
            >
               {
  language === "EN" && <>Restart the Survey</>
}
{
  language === "FR" && <>Redémarrer le Feed </>
}
{
  language === "AR" && <>إعادة تشغيل الاستطلاع</>
}
             
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
        <p>
        {
  language === "EN" && <>Progress</>
}
{
  language === "FR" && <>Progrès </>
}
{
  language === "AR" && <>تقدم</>
}
</p>
        <div>{progress}%</div>
      </div>

      <div className=' flex-grow h-4  rounded-md bg-gray-200  transition-all duration-500 ease-in-out'>
        <div
          className={`h-full ${
            progress > 80 ? 'bg-green-500' : 'bg-blue-500'
          } rounded-md transition-all duration-500 ease-in-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.section>
  );
}
