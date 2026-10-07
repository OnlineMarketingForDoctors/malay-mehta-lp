/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The root used to redirect to the non-surgical page, which left the hair
  // transplant page with no way in from the domain root. It now serves an
  // index of both — see app/page.tsx. The 307 was never cached, so nothing
  // needs unwinding.
};

export default nextConfig;
