/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pour la compatibilité avec GitHub Pages
  trailingSlash: true,
  // Si vous déployez sur un sous-domaine comme username.github.io/repo-name
  basePath: '/cresp01-hub.github.io',
};

export default nextConfig;
