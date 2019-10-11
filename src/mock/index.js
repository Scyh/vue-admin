const user = require('./user');
const other = require('./other');

const apis = [
    ...user,
    ...other
]

const dataWrap = apis => apis.map(i => ({
        url: i.url,
        type: i.type,
        callback: i.callback
    }))

module.exports = dataWrap(apis)