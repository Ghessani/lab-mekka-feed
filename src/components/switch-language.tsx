import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';

function LanguageSwitcher() {
  const { setLang } = useSurvey();
  return (
    <motion.div
      className='w-full  p-5  flex gap-5 px-10'
      dir='ltr'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <button type='button' onClick={() => setLang('AR')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='90'
          height='60'
          viewBox='0 0 90000 60000'
        >
          <path fill='#c1272d' d='m0 0h90000v60000H0z' />
          <path
            fill='none'
            stroke='#006233'
            strokeWidth='1426'
            d='m45000 17308 7460 22960-19531-14190h24142L37540 40268z'
          />
        </svg>
      </button>
      <button onClick={() => setLang('FR')}>
        <svg xmlns='http://www.w3.org/2000/svg' width='90' height='60'>
          <rect width='90' height='60' fill='#ED2939' />
          <rect width='60' height='60' fill='#fff' />
          <rect width='30' height='60' fill='#002395' />
        </svg>
      </button>
      <button type='button' onClick={() => setLang('EN')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='110'
          height='60'
          viewBox='0 0 7410 3900'
        >
          <rect width='7410' height='3900' fill='#b22234' />
          <path
            d='M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0'
            stroke='#fff'
            strokeWidth='300'
          />
          <rect width='2964' height='2100' fill='#3c3b6e' />
          <g fill='#fff'>
            <g id='s18'>
              <g id='s9'>
                <g id='s5'>
                  <g id='s4'>
                    <path
                      id='s'
                      d='M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z'
                    />
                    <use xlinkHref='#s' y='420' />
                    <use xlinkHref='#s' y='840' />
                    <use xlinkHref='#s' y='1260' />
                  </g>
                  <use xlinkHref='#s' y='1680' />
                </g>
                <use xlinkHref='#s4' x='247' y='210' />
              </g>
              <use xlinkHref='#s9' x='494' />
            </g>
            <use xlinkHref='#s18' x='988' />
            <use xlinkHref='#s9' x='1976' />
            <use xlinkHref='#s5' x='2470' />
          </g>
        </svg>
      </button>
    </motion.div>
  );
}

export default LanguageSwitcher;
