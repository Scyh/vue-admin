import Session from '@/utils/session'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            Session.setToken(JSON.stringify(token))
        },
        SET_USER_INFO(state, info) {
            state.user = info;
        },
        SET_AVATAR(state, img) {
            state.user.avatar = img
        }

    },
    actions: {
        async login({ dispatch, commit }, data) {
            data.grade = data.user_name === 'admin' ? 0 : 1;
            commit('SET_TOKEN', data);
            return Promise.resolve(data)
        },

        // 根据token获取用户信息
        async getUserInfo({ commit }) {
            let data = Session.getToken();
            commit('SET_USER_INFO', data);
            return data;
        },
        async changeAvatar({ commit }, img) {
            commit('SET_AVATAR', img)
            return Promise.resolve();
        },
    },
    getters: {
        avatar: state => state.user.avatar
    }
}