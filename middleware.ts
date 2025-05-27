import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, type LanguageType, type Locale } from "./i18n.config";



function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  let locale = "";

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    locale = i18n.defaultLocale;
  }
  return locale;
}

export function middleware(request:NextRequest ) {


    const requesHeaders = new Headers(request.headers);
    requesHeaders.set("x-url", request.url)
     
     const pathname = request.nextUrl.pathname;

     const pathnameIsMissingLocale = i18n.locales.every(
        (locale: Locale) => !pathname.startsWith(`/${locale}`) 
    );
       
     
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        if (locale) {
            // Redirect to the same path with the locale prefix
            return NextResponse.redirect(
                new URL(`/${locale}${pathname}`, request.url)
            );
        }
    }
    
    return NextResponse.next({
        request: {
            headers: requesHeaders,
        },
        // cookies: request.cookies, // If you need to pass cookies
    });
}
export const config = {
    matcher: [
        // Match all request paths except for the ones starting with _next/static or _next/image
        "/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)",
    ],
};