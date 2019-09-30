const registerRoutes = app => {
    const apis = require('./index')
    apis.forEach(i => app[i.type](i.url, i.callback))
}

module.exports = app => {

    // 路由注册
    registerRoutes(app);
}