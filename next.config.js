const withLess = require('@zeit/next-less');

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    webpack: (config, { isServer }) => {
        const tempConfig = { ...config };
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...tempConfig.externals];
            tempConfig.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            tempConfig.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        return tempConfig;
    },
});
