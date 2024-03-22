import { useSurvey } from '@/lib/useSurvey';
import React from 'react';

function Comment() {
  const { setCurrent, current, saveFeedBack, setQuerry, query, language } =
    useSurvey();
  return (
    <section className='flex gap-4 text-xl flex-col'>
      <textarea
        cols={30}
        rows={6}
        className='p-2 border rounded-md resize-none bg-gray-50'
        placeholder={
          language === 'EN' ?'Please leave your comment here':
          language === 'FR'
            ? 'Veuillez laisser votre commentaire ici.'
            : 'الرجاء ترك تعليقك هنا'
        }
        onChange={(e) => {
          setQuerry({
            ...query,
            message: e.target.value,
          });
        }}
      />
      <button
        className=' bg-blue-500 shadow-lg rounded-md text-white  px-6 py-2'
        onClick={() => saveFeedBack()}
      >
       {
  language === "EN" && <> Next </>
}
{
  language === "FR" && <>Suivant</>
}
{
  language === "AR" && <> التالي</>
}
      </button>
    </section>
  );
}

export default Comment;
