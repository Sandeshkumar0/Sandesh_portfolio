import type { AppProps } from 'next/app';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrollProvider>
      <Component {...pageProps} />
    </SmoothScrollProvider>
  );
}
