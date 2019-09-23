const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')).end();

        config.module.rule('svgIcon').test(/\.svg$/).include.add(resolve('src/icons/svgs')).end()
                            // .use('svg-inline-loader').loader('svg-inline-loader').end()
                            // .use('svgo-loader').loader('svgo-loader').options({
                            //     plugins: [
                            //         { removeXMLNS: true },
                            //         { convertStyleToAttrs: true }
                            //     ]
                            // }).end()
                            .use('svg-sprite-loader').loader('svg-sprite-loader').options({
                                symbolId: 'icon-[name]'
                            }).end()

        config.module.rule('svg').exclude.add(resolve('src/icons/svgs')).end();
    },
    css: {
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