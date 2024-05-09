const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/apis/:path*",
  //       destination: "http://filmydude.hyperphp.com/apis/:path*", // Proxy to API
  //     },
  //   ];
  // },
};

export default nextConfig;
