import React from 'react';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';

function ThankYou() {
  const { clearAll,language } = useSurvey();
  return (
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
      <p className='text-center'>
      {
  language === "EN" && <> Thank you for your feedback </>
}
{
  language === "FR" && <>Merci pour votre retour.</>
}
{
  language === "AR" && <> شكراً لتعليقك</>
}

        </p>

      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-2xl text-gray-700'
      >
       <p className='text-center'>
      {
  language === "EN" && <> We are happy to serve you </>
}
{
  language === "FR" && <> Nous sommes heureux de vous servir.</>
}
{
  language === "AR" && <> نحن سعداء بخدمتك</>
}

        </p>
      </motion.p>
      <button onClick={() => clearAll()}>
      {
  language === "EN" && <> Restart </>
}
{
  language === "FR" && <>Recommencer.</>
}
{
  language === "AR" && <> إعادة التشغيل</>
}
       
        
        
        </button>
    </motion.div>
  );
}

export default ThankYou;
