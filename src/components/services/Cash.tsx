import React from 'react';
import { Happy } from '@/components/icones/happy';

import { Sad } from '@/components/icones/sad';
import { VeryHappy } from '@/components/icones/very-happy';
import { VerySad } from '@/components/icones/very-sad';
import { useSurvey } from '@/lib/useSurvey';
import { motion } from 'framer-motion';

function Cash() {
  const { setCurrent, current,language, query, setQuerry } = useSurvey();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      exit={{ opacity: 0 }}
      className='flex gap-10 items-center my-auto '
    >
      <motion.div
        className='flex flex-col gap-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            setQuerry({
              ...query,
              cash: 'ABSOLUTELY_DISATISFIED',
            });
            setCurrent(current + 1);
          }}
        >
          <VerySad width={200} height={200} />
        </motion.button>
        <p className='text-center'>
        {
  language === "EN" && <> Absolutely <br /> disatisfied </>
}
{
  language === "FR" && <>Absolument <br />  insatisfait</>
}
{
  language === "AR" && <>غير راضٍ<br /> تمامًا</>
}
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            cash: 'DISATISFIED',
          });
          setCurrent(current + 1);
        }}
      >
        <Sad width={200} height={200} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            cash: 'OK',
          });
          setCurrent(current + 1);
        }}
      >
     
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            cash: 'SATISFIED',
          });
          setCurrent(current + 1);
        }}
      >
        <Happy width={200} height={200} />
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-4'
      >
        <button
          onClick={() => {
            setQuerry({
              ...query,
              cash: 'EXTREMELY_SATISFIED',
            });
            setCurrent(current + 1);
          }}
        >
          <VeryHappy width={200} height={200} />
        </button>
        <p className='text-center'>
        {
  language === "EN" && <> Absolutely <br /> satisfied </>
}
{
  language === "FR" && <>Absolument <br />  satisfait</>
}
{
  language === "AR" && <>  راضٍ<br />  تمامًا</>
}
          </p>
      </motion.div>
    </motion.div>
  );
}

export default Cash;
