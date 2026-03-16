/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      { source: "/lidar",                permanent: true, destination: "/gallery/3d/rastovac" },
      { source: "/bg3crash",             permanent: true, destination: "/gallery/3d/nautaloid-crash" },
      { source: "/attackonbaldursgate",  permanent: true, destination: "/gallery/3d/attack-on-baldurs-gate" },
    ];
  },
};

module.exports = nextConfig;
