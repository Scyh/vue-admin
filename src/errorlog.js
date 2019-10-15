import Vue from 'vue';
import store from './store'

Vue.config.errorHandler = function(error, vm, info) {
    console.log(error.stack)
    store.commit('app/appendErrorLog', {
        error,
        vm,
        info,
        time: new Date().valueOf()
    });
    // console.log(error.message, error.stack)
    console.error(error)
}