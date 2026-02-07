import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  /* Optimize for faster HMR and development */
  experimental: {
    // Optimize CSS handling
    optimizeCss: true,

    // Better tree-shaking
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;