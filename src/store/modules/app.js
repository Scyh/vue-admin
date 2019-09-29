import Session from '@/utils/session'
import { hex_sha1 } from '@/utils/sha1'

export default  {
    namespaced: true,
    state: {
        headerFixed: true,
        sidebar: {
            close: false,
            animation: true,
        },
        rightSide: false,
        mask: false,
        lock: Session.getLock() || {
            password: '',
            route: '',
            isLocked: false
        }
    },
    mutations: {
        toggleHeaderFixed(state) {
            state.headerFixed = !state.headerFixed
        },
        toggleSidebar(state) {
            state.sidebar.close = !state.sidebar.close
        },
        toggleRightSide(state) {
            state.rightSide = !state.rightSide
            state.mask = true;
        },
        closeMask(state, event) {
            if (typeof event.target.className === 'string' && event.target.className.includes('mask')) {
                if (state.rightSide) {
                    state.rightSide = false;
                    state.mask = false;
                }
            }
        },
        lock(state, { password, route }) {
            state.lock.isLocked = true,
            state.lock.password = password;
            state.lock.route = route;
            Session.lock(JSON.stringify({
                password,
                route
            }));
        },
        unlock(state, password) {
            let _password = hex_sha1(password);
            if (_password === state.lock.password) {
                state.lock.isLocked = false;
                state.lock.password = '';
                Session.unlock();
            }
            return false
        }
    },
    actions: {
        async lock({commit}, { password, route }) {
            commit('lock', {
                password: hex_sha1(password),
                route
            });
        },
        async unlock({commit, state}, password) {
            if (hex_sha1(password) === state.lock.password) {
                commit('unlock', password);
                return state.lock.route
            }
        }
    },
    getters: {
        sidebarClosing: state => state.sidebar.close,
        rightSideOpening: state => state.rightSide,
        mask: state => state.mask,
        headerFixed: state => state.headerFixed
    }
}