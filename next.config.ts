import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPagesUserSite = repositoryName.endsWith('.github.io');
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isGitHubPagesUserSite
    ? `/${repositoryName}`
    : '');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  poweredByHeader: false,

  // ── Turbopack: pin workspace root to avoid wrong lockfile detection ──
  turbopack: {
    root: __dirname,
  },

  // ── Compiler optimizations ──────────────────────────────────────────
  compiler: {
    // Strip console.log in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    unoptimized: true,
  },

  // ── Webpack: scope hoisting + bundle size reduction ─────────────────
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Enable scope hoisting — merges small modules, reduces parse time
      config.optimization = {
        ...config.optimization,
        concatenateModules: true,
        sideEffects: true,
      };
    }
    return config;
  },
};

export default nextConfig;

