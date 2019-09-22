export default  {
    namespaced: true,
    state: {
        sidebar: {
            close: false,
            animation: true,
        },
        rightSide: false,
        logo: true,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebar.close = !state.sidebar.close
        },
        toggleRightSide(state) {
            state.rightSide = !state.rightSide
        }
    },
    getters: {
        sidebarOpening: state => state.sidebar.close,
        rightSideOpening: state => state.rightSide,
        logo: state => state.logo
    }
}