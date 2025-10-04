/* eslint-disable @next/next/no-img-element */
import "../globals.css";
import React from "react";
import Link from "next/link";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }, { locale: "ms" }];
}

export const metadata = {
  title: "FunnelFox Digital — We turn clicks into clients",
  description: "Conversion-first websites, SEO, and funnels for SMEs in Malaysia & SEA.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/favicon-512x512.png"
  }
};

function NavLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return <Link href={href} className="text-sm text-neutral-600 hover:text-neutral-900">{children}</Link>;
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale}>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="container-max h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img src="/logo-3.png" alt="FunnelFox" className="h-8 w-8" />
            <span className="font-semibold">FunnelFox Digital</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href={`/${locale}/services`}>Services</NavLink>
            <NavLink href={`/${locale}/cases`}>Cases</NavLink>
            <NavLink href={`/${locale}/process`}>Process</NavLink>
            <NavLink href={`/${locale}/blog`}>Blog</NavLink>
            <NavLink href={`/${locale}/contact`}>Contact</NavLink>
            <Link href={`/${locale}/blueprint`} className="btn-primary">Get Blueprint</Link>
          </nav>
          <Link href={`/${locale}/blueprint`} className="md:hidden btn-primary">Start</Link>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="border-t border-neutral-200">
        <div className="container-max py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo-3.png" alt="FunnelFox" className="h-8 w-8" />
              <span className="font-semibold">FunnelFox Digital</span>
            </div>
            <p className="text-sm text-neutral-600 mt-3">
              We build conversion-first websites & SEO for SMEs across Malaysia & SEA.
            </p>
          </div>
          <div>
            <p className="font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={`/${locale}/about`} className="hover:underline">About</Link></li>
              <li><Link href={`/${locale}/cases`} className="hover:underline">Case Studies</Link></li>
              <li><Link href={`/${locale}/process`} className="hover:underline">Process</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={`/${locale}/services/web-design`}>Web Design</Link></li>
              <li><Link href={`/${locale}/services/seo`}>SEO</Link></li>
              <li><Link href={`/${locale}/services/wordpress`}>WordPress</Link></li>
              <li><Link href={`/${locale}/services/app-design`}>App UI/UX</Link></li>
              <li><Link href={`/${locale}/services/branding-copy`}>Brand & Copy</Link></li>
              <li><Link href={`/${locale}/services/business-strategy`}>Growth Strategy</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href={`/${locale}/privacy`} className="hover:underline">Privacy</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:underline">Terms</Link></li>
            </ul>
            <div className="text-sm text-neutral-500 mt-4">© {new Date().getFullYear()} FunnelFox Digital</div>
          </div>
        </div>
       </footer>
       </div>
     </NextIntlClientProvider>
   );
}