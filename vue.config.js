const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

const port = process.env.port || 9527

module.exports = {
    devServer: {
        proxy: {
            [process.env.VUE_APP_BASEURL]: {
                target: `http://127.0.0.1:${port}`,
                pathReWrite: {
                    [`^${process.BASEURL}`]: ''
                }
            }
        },
        after: require('./src/mock/server')
    },
    configureWebpack: config => {
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')).end();

        config.module.rule('svgIcon').test(/\.svg$/).include.add(resolve('src/icons/svgs')).end()
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({
                symbolId: 'icon-[name]'
            }).end()

        config.module.rule('svg').exclude.add(resolve('src/icons/svgs')).end();

        config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
                elementUi: {
                    name: 'chunk-elementUi',
                    priority: 10,
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                },
                echarts: {
                    name: 'chunk-echarts',
                    priority: 9,
                    test: /[\\/]node_modules[\\/]_?echarts(.*)/
                },
                commons: {
                    name: 'chunk-common',
                    priority: 8,
                    test: resolve('src/components'),
                    reuseExistingChunk: true,
                    minChunks: 3,
                },
                utils: {
                    name: 'chunk-utils',
                    priority: 7,
                    test: resolve('src/utils'),
                    reuseExistingChunk: true,
                    minChunks: 3
                }
            }
        })
    },
    css: {
        extract: true,
        loaderOptions: {
            sass: {
                prependData: `
            @import "@/style/variables.scss";
            @import '@/style/animation.scss';
            @import '@/style/mixin.scss';
                        `
            }
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ]
}