import { useSurvey } from '@/lib/useSurvey';
import React from 'react';

function Nextbutton({ disabled = false }: { disabled?: boolean }) {
  const { setCurrent, current } = useSurvey();
  return (
    <button
      className='px-5 py-2 m-4 rounded-md bg-blue-500 text-white disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 '
      disabled={disabled}
      onClick={() => setCurrent(current + 1)}
    >
      Next
    </button>
  );
}

export default Nextbutton;
