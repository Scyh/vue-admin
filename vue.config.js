const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
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