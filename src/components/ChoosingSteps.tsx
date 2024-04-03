import React, { ChangeEvent, use, useEffect } from 'react';
import { Happy } from '@/components/icones/happy';

import { Sad } from '@/components/icones/sad';
import { VeryHappy } from '@/components/icones/very-happy';
import { VerySad } from '@/components/icones/very-sad';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';
import getKeysWithTrueValues, { Keys } from '@/app/utils/array';

interface ServiceType {
  name: {
    FR :  string,
    EN : string
    AR : string
  };
  id: 'recp' | 'emrg' | 'bill' | 'cash' | 'care' | 'labo' | 'oprt' | 'radl';
}

const services: ServiceType[] = [
  {
    name: {
      FR :  "Réception ",
      EN : "Reception ",
      AR : "استقبال",
    },
    
    id: 'recp',
  },
  {
    name: {
      FR :  "Urgence",
      EN : "Emergency",
      AR : "طوارئ",
    },
    id: 'emrg',
  },
  {
    name: {
      FR :  "Facturation",
      EN : "Billing",
      AR : "الفوترة",
    },
    id: 'bill',
  },
  {
    name: {
      FR :  "Caisse",
      EN : "Cashier",
      AR : "الصندوق",
    },
    id: 'cash',
  },
  {
    name:  {
      FR :  "Soin",
      EN : "care",
      AR : "الرعاية",
    },
    id: 'care',
  },
  {
    name: {
      FR :  "Laboratoire",
      EN : "Laboratory",
      AR : "المختبر",
    },
    id: 'labo',
  },
  {
    name: {
      FR :  "Chirurgie",
      EN : "Surgery",
      AR : "العمليات",
    },
    id: 'oprt',
  },
  {
    name: {
      FR :  "Radiologie",
      EN : "Radiology",
      AR : "التصوير الطبي",
    },
    id: 'radl',
  },
];
function ChoosingSteps() {
  const { setCurrent, setTimeLine, setService, service ,language} = useSurvey();
  const [checkedServices, setCheckedServices] = React.useState(0);

  useEffect(() => {
    const numberofchecked = Object.values(service).filter((v) => v).length;
    setCheckedServices(numberofchecked);
  }, [service]);

  const handleNext = () => {
    if (checkedServices > 3) return;
    const chosenServices = getKeysWithTrueValues(
      service as Record<Keys, boolean>
    );
    setTimeLine([
      'start',
      'chousingservices',
      ...chosenServices,
      'contact',
      'comment',
      'thankyou',
    ]);
    setCurrent(2);
  };
  return (
    <div className='text-center my-auto'>
      {checkedServices > 3 && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='pb-6 text-red-500'
        >
          {
            language === 'EN' ? 
            "You can only choose up to three services." :
            language === 'FR' ? 
            "Vous ne pouvez choisir que jusqu'à trois services." :
            language === 'AR' ? 
            "يمكنك اختيار ما يصل إلى ثلاث خدمات فقط" :""
          }
        </motion.p>
      )}
      <motion.div
        className='grid grid-cols-4 gap-10 text-2xl select-none transition-all duration-150 ease-in-out transform '
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        exit={{ opacity: 0 }}
        whileTap={{ scale: 0.8 }}
      >
        {services.map((srvc, i) => {
          return (
            <label key={i} className='flex gap-4'>
              <input
                className='w-[40px] '
                type='checkbox'
                name=''
                defaultChecked={service[srvc.id]}
                id=''
                onChange={(e) => {
                  if (e.target.checked) {
                    setService(srvc.id, true);
                    setCheckedServices(checkedServices + 1);
                  } else {
                    setService(srvc.id, false);
                    setCheckedServices(checkedServices - 1);
                  }
                  console.log(service);
                }}
              />
              {language==="AR" ? srvc.name.AR :
              language==="FR" ? srvc.name.FR : 
              language==="EN" ? srvc.name.EN : ""} 
            </label>
          );
        })}
      </motion.div>
      {checkedServices > 0 && (
        <motion.button
          disabled={checkedServices > 3}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-blue-500 disabled:bg-gray-50 disabled:text-gray-500 text-white px-4 py-2 mt-6 rounded-md'
          onClick={handleNext}
          whileTap={{ scale: 0.8 }}
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
        </motion.button>
      )}
    </div>
  );
}

export default ChoosingSteps;
