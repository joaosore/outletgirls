export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.png).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname == '/') {
    return;
  }

  if (pathname.endsWith('.css')) {
    return;
  }

  if (pathname.endsWith('.js')) {
    return;
  }

  if (pathname.endsWith('.webp')) {
    return;
  }

  if (pathname.endsWith('.svg')) {
    return;
  }

  if (pathname.endsWith('.png')) {
    return;
  }

  if (pathname.endsWith('.jpeg')) {
    return;
  }

  if (pathname.endsWith('.jpg')) {
    return;
  }
}
