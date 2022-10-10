/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["images.unsplash.com","image.tmdb.org","occ-0-4409-3647.1.nflxso.net","avatars.dicebear.com","netflix-clone-next-js-ten.vercel.app","assets.nflxext.com"]
  }
}

module.exports = nextConfig
