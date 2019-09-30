const Mock = require('mockjs')

module.exports = [
    {
        url: '/test',
        type: 'get',
        data: Mock.mock({
            "number|1-100": 0
        })
    }
]
