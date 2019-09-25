export default  {
    namespaced: true,
    state: {
        sidebar: {
            close: false,
            animation: true,
        },
        rightSide: false,
        mask: false,
        gutter: 20,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebar.close = !state.sidebar.close
        },
        toggleRightSide(state) {
            state.rightSide = !state.rightSide
            state.mask = true;
        },
        closeMask(state, event) {
            if (event.target.className.includes('mask')) {
                if (state.rightSide) {
                    state.rightSide = false;
                    state.mask = false;
                }
            }
        }        
    },
    getters: {
        sidebarOpening: state => state.sidebar.close,
        rightSideOpening: state => state.rightSide,
        mask: state => state.mask
    }
}