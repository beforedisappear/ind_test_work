import { TurbopackConfig } from './config/turbopack/turbopack.config';
import { WebpackConfig } from './config/webpack/webpack.config';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: WebpackConfig,
  experimental: {
    turbo: TurbopackConfig,
  },
};

export default nextConfig;
