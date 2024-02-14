'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function MyCustomNextIntlClientProvider({
  locale,
  timeZone,
  now,
  ...rest
}: {
  locale: string;
  timeZone: string;
  now: Date;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider
      // Define non-serializable props here
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
      // Make sure to forward these props to avoid markup mismatches
      locale={locale}
      timeZone={timeZone}
      now={now}
      {...rest}
    />
  );
}
