export default  {
    namespaced: true,
    state: {
        sidebar: {
            close: false,
            animation: true,
        },
        logo: true,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebar.close = !state.sidebar.close
        }
    },
    getters: {
        sidebarOpening: state => state.sidebar.close,
        logo: state => state.logo
    }
}