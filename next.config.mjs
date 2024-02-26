import next from 'next';
const {NextConfig} = next;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'liveblocks.io',
                port: '',
            },
        ],
    },

    webpack: (config) => {config.externals.push({sharp: 'commonjs sharp', canvas: 'commonjs canvas'}); return config;}

    // webpack: (config, {isServer}) => {
    //     if (!isServer) {
    //         config.module.rules.push({
    //             test: /\.node$/,
    //             use: 'node-loader',
    //         });
    //     }
    //     return config;
    // },
};

export default nextConfig;
