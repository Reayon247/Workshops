/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://ppbjgjqzxjcwfujewhzx.supabase.co/**")],
  },
};

export default nextConfig;
