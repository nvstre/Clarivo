import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'media.pitchfork.com',  // already added
      'images.unsplash.com',  // already added
      'i1.sndcdn.com',        // SoundCloud
      'res.cloudinary.com',   // Cloudinary
      's3-us-west-1.amazonaws.com',  // Amazon S3
      'news.westbranch.org',  // West Branch News
      'www.hotnewhiphop.com', // HotNewHipHop
      'e.snmc.io',            // New domain added for the error
      'ui.aceternity.com',    // Already added
      'assets.aceternity.com', // New domain added to fix the error
      'i.scdn.co'
    ],
  },
};

export default nextConfig;
