import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';
import { motion } from 'framer-motion';
import { useSurvey } from '@/lib/useSurvey';

function Contact() {
  const numbersRegex = /^[0-9]+$/;
  const { query, setQuerry, setCurrent, language, current } = useSurvey();

  const centerEmoji = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

}

const poppins = Poppins({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clinique Mekka',
  description: 'Feedback Clinique Mekka',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
