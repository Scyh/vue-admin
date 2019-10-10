const Mock = require('mockjs');
const Random = Mock.Random;

let table = new Array(100).fill(0).map(() => ({
        name: Random.cname(),
        address: Random.county(true),
    }));

module.exports = [
    {
        url: '/table',
        type: 'get',
        data: table
    }
]