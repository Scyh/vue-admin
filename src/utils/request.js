import Axios from 'axios';
import { Message } from 'element-ui';

let server = Axios.create({
    baseURL: process.env.BASEURL,
    timeout: 4000
});

server.interceptors.request.use(config => config);

server.interceptors.response.use(response => {
    const res = response.data;
    if (res.status !== 0) {
        Message.error(res.errmsg)
    } else {
        return res
    }
    return Promise.reject(res);
}, error => {
    Message.error(error.message);
    console.log('error: ', error)
    return Promise.reject(error)
});


export const get = (url, data) => {
    return new Promise((resolve, reject) => {
        return server.get(url, {
            params: data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            resolve();
        })
    })
}


export default server;