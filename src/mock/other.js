const Mock = require('mockjs');
const Random = Mock.Random;

let table = new Array(Random.integer(1000, 1000)).fill(0).map(() => ({
        id: Random.guid(),
        name: Random.cname(),
        address: Random.county(true),
        phone: Mock.mock(/1\d{2}\-XXXX\-\d{4}/),
        number: Random.natural(1, 2000)
    }))


module.exports = [
    {
        url: '/table',
        type: 'get',
        callback: (req, res) => {
            let { page = 1, pageSize = 20, searchKey = '' } = req.query,
                result = table;
            console.log('req.query: ', req.query)
            if (searchKey) {
                let reg = new RegExp(searchKey, 'img');
                result = table.filter(i => reg.test(i.name) || reg.test(i.address) || reg.test(i.phone));
            }

            res.json({
                status: 0,
                data: {
                    data: result.slice((page - 1) * pageSize, page * pageSize),
                    count: result.length
                }
            })
        }
    }
]