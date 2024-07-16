const { defineConfig } = require('@vue/cli-service')
const publicCopyIgnore = ['**/.DS_Store']
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.BASE_NAME = require('./package.json').name


module.exports = defineConfig({
    filenameHashing:process.env.NODE_ENV === 'production',
    productionSourceMap: false,
    publicPath: '/',
    transpileDependencies: true,
    chainWebpack: (config) => {

        config.plugin('define').tap((definitions) => {
            Object.assign(definitions[0], {
                __VUE_OPTIONS_API__: 'true',
                __VUE_PROD_DEVTOOLS__: 'false',
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
            })
            return definitions
        });

        config.plugin("copy").use(require('copy-webpack-plugin'), [{
            patterns: [
                {
                    from: "src/assets/js",
                    to: "assets/js",
                    noErrorOnMissing: true,
                    toType: "dir",
                    globOptions: {
                        ignore: publicCopyIgnore
                    }
                },
                {
                    from: "src/assets/css",
                    to: "assets/css",
                    noErrorOnMissing: true,
                    toType: "dir",
                    globOptions: {
                        ignore: publicCopyIgnore
                    }
                },
                {
                    from: "src/assets/img",
                    to: "assets/img",
                    noErrorOnMissing: true,
                    toType: "dir",
                    globOptions: {
                        ignore: publicCopyIgnore
                    }
                },
                {
                    from: "public/favicon.ico",
                    to: "favicon.ico",
                    noErrorOnMissing: true
                },
                {
                    from: "src/.htaccess",
                    to: ".htaccess",
                    toType: "file",
                    noErrorOnMissing: true
                },
            ]
        }]);

    }
})
