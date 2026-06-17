import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sandesh Kumar - Backend Developer & ML Engineer" />
        <meta
          property="og:description"
          content="Backend developer and ML engineer passionate about building scalable systems and AI solutions"
        />
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
                'https://github.com/sandesh07',
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
