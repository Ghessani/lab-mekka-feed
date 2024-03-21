import React from 'react';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';

function ThankYou() {
  const { clearAll } = useSurvey();
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
      <button onClick={() => clearAll()}>Restart</button>
    </motion.div>
  );
}

export default ThankYou;
