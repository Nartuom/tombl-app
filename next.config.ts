import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tombl.co.uk" }],
        destination: "https://tombl.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
