import { Happy } from '@/components/icones/happy';
import { Normal } from '@/components/icones/normal';
import { Sad } from '@/components/icones/sad';
import { VeryHappy } from '@/components/icones/very-happy';
import { VerySad } from '@/components/icones/very-sad';
import LanguageSwitcher from '@/components/switch-language';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className='w-full h-screen  flex  items-center flex-col  bg-gray-50 '>
      <div className='flex-grow flex flex-col '>
        <section className='p-4 flex flex-col gap-4'>
          <div className='relative bg-gray-200 border border-gray-300 rounded-full flex'>
            <span className='px-2 z-10 text-white mix-blend-difference'>
              progress : 0%
            </span>
            <div className='absolute top-0 left-0 rounded-full bg-gray-800 h-full w-[0%] transition-all duration-300 ease-in-out'></div>
          </div>
          <p className='text-4xl '>
            Dans quelle mesure êtes-vous satisfait de votre expérience
            aujourd&apos;hui?
          </p>
        </section>
        <section className='flex-grow flex flex-col gap-10 items-center justify-center '>
          <div className='flex gap-10 '>
            <VeryHappy width={90} height={90} />
            <Happy width={90} height={90} />
            <Normal width={90} height={90} />
            <Sad width={90} height={90} />
            <VerySad width={90} height={90} />
          </div>
        </section>
      </div>
      <LanguageSwitcher />
    </main>
  );
}
