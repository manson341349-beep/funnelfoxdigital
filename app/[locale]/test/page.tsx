import { getTranslations } from 'next-intl/server';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ms' }
  ];
}

export default async function TestPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('nav');
  
  return (
    <div>
      <h1>Test Page - {locale}</h1>
      <p>Home: {t('home')}</p>
      <p>Services: {t('services')}</p>
    </div>
  );
}