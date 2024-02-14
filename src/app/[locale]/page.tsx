import MyCustomNextIntlClientProvider from '@/components/client-provider';
import Homepage from '@/components/home';
import { useTranslations } from 'next-intl';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('Index');
  const titleT = t('title');
  const subheadingT = t('subheading');
  const languageT = t('language');
  const serviceT = t('service');
  const start = t('start');
  return (
    <main className='w-full h-screen  flex  items-center flex-col gap-6 bg-gray-50'>
      <MyCustomNextIntlClientProvider
        locale={locale}
        timeZone='UTC'
        now={new Date()}
      >
        <Homepage
          titleT={titleT}
          subheadingT={subheadingT}
          languageT={languageT}
          serviceT={serviceT}
          locale={locale}
          start={start}
        />
      </MyCustomNextIntlClientProvider>
    </main>
  );
}
