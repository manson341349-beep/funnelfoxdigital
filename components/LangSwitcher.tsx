"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["en", "zh", "ms"];

const localeNames = {
  en: "EN",
  zh: "中文",
  ms: "MS"
};

export function LangSwitcher() {
  const pathname = usePathname() || "/";
  const pathNoLocale = pathname.replace(/^\/(?:en|zh|ms)/, "");

  return (
    <div className="flex gap-2 text-sm">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathNoLocale}`}
          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-neutral-100"
        >
          {localeNames[locale as keyof typeof localeNames]}
        </Link>
      ))}
    </div>
  );
}