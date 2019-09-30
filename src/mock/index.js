const user = require('./user');

const apis = [
    ...user
]

const dataWrap = apis => apis.map(i => ({
        url: i.url,
        type: i.type,
        callback: (req, res) => res.json({
            status: 0,
            data: i.data
        })
    }))

module.exports = dataWrap(apis)