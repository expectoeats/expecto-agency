import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s.wordpress.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "interfaceclasses.com", pathname: "/**" },
      { protocol: "https", hostname: "www.swapzy.store", pathname: "/**" },
      { protocol: "https", hostname: "png.pngtree.com", pathname: "/**" },
      { protocol: "https", hostname: "ramainstitutetech.com", pathname: "/**" },
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256],
  },

  async headers() {
    return [
      {
        // Security headers for all routes EXCEPT _next/static (handled automatically by Next.js)
        source: "/((?!_next/static).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          ...(isProd
            ? [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }]
            : []),
        ],
      },
      {
        source: "/(.*)\\.(woff2|woff|ttf|otf|eot)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|svg|ico|webp|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" }],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },
};

export default nextConfig;
