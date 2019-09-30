import request from '@/utils/request'

export const test = async function() {
    return request({
        type: 'get',
        url: 'test'
    })
}