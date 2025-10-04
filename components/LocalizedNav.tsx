"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return <Link href={href} className="text-sm text-neutral-600 hover:text-neutral-900">{children}</Link>;
}

export function LocalizedNav() {
  const t = useTranslations('nav');
  const tCta = useTranslations('cta');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      <NavLink href={`/${locale}/services`}>{t('services')}</NavLink>
      <NavLink href={`/${locale}/cases`}>Cases</NavLink>
      <NavLink href={`/${locale}/process`}>Process</NavLink>
      <NavLink href={`/${locale}/blog`}>{t('blog')}</NavLink>
      <NavLink href={`/${locale}/contact`}>{t('contact')}</NavLink>
      <Link href={`/${locale}/blueprint`} className="btn-primary">{tCta('blueprint')}</Link>
    </>
  );
}