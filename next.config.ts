import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "xynshcnkxdliapebmyaz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "oefjsifvvltrjqqcrbha.supabase.co", // reemplazan tu_subdominio por su subdominio ejem xhgfdfgdsfdhgsuuhy
      },
      {
        protocol: 'https',
        hostname: 'oefjsifvvltrjqqcrbha.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**', 
      },
    ],
  },
};

export default nextConfig;
