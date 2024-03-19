import { useSurvey } from '@/lib/useSurvey';
import React from 'react';

function Comment() {
  const { setCurrent, current, language } = useSurvey();
  return (
    <section className='flex gap-4 text-xl flex-col'>
      <textarea
        cols={30}
        rows={6}
        className='p-2 border rounded-md resize-none bg-gray-50'
        placeholder={
          language === 'EN' || language === 'FR'
            ? 'Please leave your comment here'
            : 'الرجاء ترك تعليقك هنا'
        }
      />
      <button
        className=' bg-blue-500 shadow-lg rounded-md text-white  px-6 py-2'
        onClick={() => setCurrent(current + 1)}
      >
        Next
      </button>
    </section>
  );
}

export default Comment;
