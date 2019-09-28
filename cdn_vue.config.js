/**
 * 配合externals，使用cdn时
 * 注释掉在main.js/router.js/store.js 等中的引用语句
 */

const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'echarts': 'echarts',
    'element-ui': 'element-ui',
}

const cdn = {
    // 开发环境
    dev: {
      css: [
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
      ],
      js: []
    },
    // 生产环境
    build: {
      css: [
        'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
      ],
      js: [
          'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
          'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
          'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
          // 'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
          'https://unpkg.com/element-ui/lib/index.js',
          'https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js',
      ]
    }
}

const productionGzipExtensions = ['js', 'css']

const compress = new CompressionWebpackPlugin({
    filename: info => {
        return `${info.path}.gz${info.query}`
    },
    algorithm: 'gzip', 
    threshold: 1024,
    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    minRatio: 0.8,
    deleteOriginalAssets: false
})


  module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.externals = externals;
            config.plugins.push(compress)
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')).end();

        // 将cdn添加到htmlWebpackPlugin配置
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            }
              if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
              }
            return args
        })

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