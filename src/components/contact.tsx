import React from 'react';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';
function Contact() {
  const numbersRegex = /^[0-9]+$/;
  const { query, setQuerry, setCurrent,language, current } = useSurvey();
  return (
    <motion.div className='flex flex-col gap-4 w-96'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className=' capitalize flex items-center'>
        {
  language === "EN" && <> email </>
}
{
  language === "FR" && <>email</>
}
{
  language === "AR" && <> البريد الإلكتروني</>
} <span className='text-gray-500 text-xs ml-auto'>
{
  language === "EN" && <> optional </>
}
{
  language === "FR" && <>Facultatif</>
}
{
  language === "AR" && <> اختياري</>
}
</span>
        </label>
        <div className='flex gap-2 text-gray-500'>
          <button className='text-xs bg-gray-50 rounded-md  w-fit border px-1'>
            @gmail.com
          </button>
          <button className='text-xs bg-gray-50 rounded-md  w-fit border px-1'>
            @hotmail.com
          </button>
        </div>
        <input
          type='email'
          name='email'
          id='email'
          className='border p-2  rounded-md '
          placeholder='example@gmail.com'
          value={query.email}
          onChange={(e) => setQuerry({ ...query, email: e.target.value })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='tel' className='capitalize  flex items-center'>
        {
  language === "EN" && <> Phone </>
}
{
  language === "FR" && <>Telephone</>
}
{
  language === "AR" && <> هاتف</>
}
          
          <span className='text-gray-500 text-xs ml-auto'>
          {
  language === "EN" && <> optional </>
}
{
  language === "FR" && <>Facultatif</>
}
{
  language === "AR" && <> اختياري</>
}
</span>
        </label>

        <input
          type='tel'
          placeholder='0775343786'
          name=''
          id=''
          value={query.phone}
          className='border p-2  rounded-md '
          onChange={(e) => {
            if (
              !numbersRegex.test(e.target.value) ||
              e.target.value.length > 10
            ) {
              setQuerry({ ...query, phone: e.target.value });
            }
          }}
        />
        <button
          className='bg-blue-400 rounded-md p-2 mt-3 text-white'
          onClick={() => {
            setCurrent(current + 1);
          }}
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
      </div>
    </motion.div>
  );
}

export default Contact;
