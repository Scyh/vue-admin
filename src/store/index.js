import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getModules = () => {
    let result = {},
    files = require.context('./modules', true, /.js$/);
    files.keys().forEach(i => {
        const key = i.replace(/^\.\/(.*)\.\w+$/, '$1')
        const val = files(i);
        result[key] = val.default;
    })
    return result;
}

export default new Vuex.Store({
    modules: getModules(),
    getters: {
        routes: state => state.permission.user_routes,
        user: state => state.user.user
    }
})
