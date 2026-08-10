import { site } from "./lib/site.ts";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // The landing page lives at site.lpPath, so the root would otherwise
        // 404. Temporary (307) rather than permanent, so it can be repointed
        // later without browsers having cached the old target.
        source: "/",
        destination: site.lpPath,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
