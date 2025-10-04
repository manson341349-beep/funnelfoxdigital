import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'zh', 'ms'];

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en'; // Default locale
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});