const Mock = require('mockjs')

module.exports = [
    {
        url: '/test',
        type: 'get',
        callback: (req, res) => {
            res.json({
                status: -1,
                errmsg: 'something error'
            })
        }
    }
]
