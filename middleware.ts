import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh", "ms"],
  defaultLocale: "en"
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (Next.js internals)
    // - _static (inside /public)
    // - all root files inside /public (e.g. /favicon.ico)
    '/((?!api|_next|_static|.*\\..*|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
};