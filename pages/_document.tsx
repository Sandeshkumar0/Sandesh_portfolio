import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── DNS Prefetch & Preconnect ── */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Google Fonts: Non-blocking with font-display=swap ── */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-expect-error: onload trick to load font non-blocking
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* ── Preload video so it's ready before JS runs ── */}
        <link
          rel="preload"
          href="/Hey_with_the_help_of_two_image.mp4"
          as="video"
          type="video/mp4"
        />

        {/* ── Meta ── */}
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sandesh Kumar — Pirate Developer | WANTED" />
        <meta
          property="og:description"
          content="AI/ML Engineer & Full-Stack Developer. Bounty: ₹500,000,000. Wanted for crafting scalable systems."
        />

        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Person',
              name: 'Sandesh Kumar',
              jobTitle: 'Backend Developer & ML Engineer',
              email: 'sandeshkr07@gmail.com',
              url: 'https://sandeshkumar.dev',
              sameAs: [
                'https://github.com/Sandeshkumar0/Sandesh_portfolio',
                'https://linkedin.com/in/sandesh-kumar',
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
