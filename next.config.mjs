/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'liveblocks.io',
                port: ''
            }
        ]
    },

    // webpack: (config, {isServer}) => {
    //     // Add a rule to handle binary files
    //     config.module.rules.push({
    //         test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|gif|webp|node)$/i,
    //         loader: 'file-loader',
    //         options: {
    //             publicPath: '/_next',
    //             name: 'static/media/[name].[hash].[ext]',
    //         },
    //     });

    //     // Return the modified config
    //     return config;
    // },
    webpack: (config) => {config.externals.push({sharp: 'commonjs sharp', canvas: 'commonjs canvas'}); return config;}

};

export default nextConfig;
