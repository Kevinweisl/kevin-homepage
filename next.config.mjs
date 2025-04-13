/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/kevin-homepage',
    assetPrefix: '/kevin-homepage/',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: '/**',
        },
      ],
      unoptimized: true,
    },
  };

  export default nextConfig;
