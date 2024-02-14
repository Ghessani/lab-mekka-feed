'use client';
import Link from 'next/link';
import React, { useState } from 'react';

function Homepage({
  titleT,
  subheadingT,
  languageT,
  serviceT,
  locale,
  start,
}: {
  titleT: string;
  subheadingT: string;
  languageT: string;
  serviceT: string;
  locale: string;
  start: string;
}) {
  const [service, setService] = useState(0);
  const [language, setLang] = useState(locale.toUpperCase());

  return (
    <>
      <div className='flex flex-col border p-4 my-14 rounded-md bg-white min-w-[200px]'>
        <h1>{subheadingT}</h1>
        <p className='text-4xl text-center'>{titleT}</p>
      </div>
      <h2 className='py-2 border-b-2 border-gray-200 '>{serviceT}</h2>

      <div className='flex gap-3 min-w-[300px]'>
        <Choice
          title='Radiology'
          onClick={() => setService(0)}
          active={service === 0}
        />
        <Choice
          title='urgency'
          onClick={() => setService(1)}
          active={service === 1}
        />
        <Choice
          title='Hemodialysis'
          onClick={() => setService(2)}
          active={service === 2}
        />
      </div>
      <h2 className='py-2 border-b-2 border-gray-200'>{languageT}</h2>
      <div className='flex gap-3 min-w-[300px]'>
        <Link href={'/ar'}>
          <Choice
            title='اَلْعَرَبِيَّة'
            onClick={() => setLang('AR')}
            active={language === 'AR'}
          />
        </Link>
        <Link href={'/en'}>
          <Choice
            title='English'
            onClick={() => setLang('EN')}
            active={language === 'EN'}
          />
        </Link>
        <Link href={'/fr'}>
          <Choice
            title='Français'
            onClick={() => setLang('FR')}
            active={language === 'FR'}
          />
        </Link>
      </div>
      <button className=' p-4 border border-purple-500 font-[900] uppercase bg-purple-50 text-purple-700 mt-5'>
        {start}
      </button>
    </>
  );
}

export default Homepage;

function Choice({
  title,
  onClick,
  active,
}: {
  title: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      className={`p-4 w-full border transition-all duration-150 ease-in-out bg-white  ${
        active
          ? 'bg-purple-200/50 rounded- border-purple-400 text-purple-700 relative after:absolute after:top-2 after:right-2 after:content-[""] after:w-2 after:h-2 after:bg-purple-500 after:rounded-full '
          : ''
      }`}
      onClick={onClick}
      disabled={active}
    >
      {title}
    </button>
  );
}
