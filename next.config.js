/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      { source: "/lidar",                permanent: true, destination: "/gallery/3d/rastovac" },
      { source: "/bg3crash",             permanent: true, destination: "/gallery/3d/nautiloid-crash" },
      { source: "/attackonbaldursgate",  permanent: true, destination: "/gallery/3d/attack-on-baldurs-gate" },
      { source: "/photogrammetry",       permanent: true, destination: "/gallery/3d/rastovac" },
      // Old misspelled v2 URLs
      { source: "/gallery/3d/nautaloid-crash",            permanent: true, destination: "/gallery/3d/nautiloid-crash" },
      { source: "/gallery/gaming-art/nautaloid-crash",    permanent: true, destination: "/gallery/gaming-art/nautiloid-crash" },
    ];
  },
};

module.exports = nextConfig;
