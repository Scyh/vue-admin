import { basicRouter, dynamicRouter } from '@/router'
import { filterRoutes } from '@/utils/permission'

export default {
    namespaced: true,
    state: {
        user_routes: null,
    },

    mutations: {
        SET_USER_ROUTES(state, routes) {
            state.user_routes = routes;
        }
    },

    actions: {
        async getUserRoutes({ commit, state }, user) {
            // 假装后台返回的数据
            if (user.user_name.trim() === 'admin') {
                commit('SET_USER_ROUTES', basicRouter.concat(dynamicRouter));
                return dynamicRouter;
            } else {
                let commonUserRoutes = dynamicRouter.filter(i => i.grade > 0);
                console.log();

                commit('SET_USER_ROUTES', [...basicRouter, ...filterRoutes(dynamicRouter, user.grade)]);
                return commonUserRoutes;
            }
        }
    }
}