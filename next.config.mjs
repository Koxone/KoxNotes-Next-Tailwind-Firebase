/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // 🔧 para evitar errores de export con imágenes
  },
};

export default nextConfig;
