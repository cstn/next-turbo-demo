import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { LocaleProps } from '@/utils/props';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '@cstn/ui/styles/globals.css';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = PropsWithChildren & LocaleProps;

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Next.js App with i18n support',
};

const RootLayout = async (props: Readonly<Props>) => {
  const params = await props.params;
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
    <body>
    <NextIntlClientProvider messages={messages}>
      <Providers>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header />
          {props.children}
          <Footer />
        </div>
      </Providers>
    </NextIntlClientProvider>
    </body>
    </html>
  );
};

export default RootLayout;
