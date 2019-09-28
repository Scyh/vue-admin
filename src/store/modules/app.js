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
        gutter: 20,
    },
    mutations: {
        toggleHeaderFixed(state) {
            state.headerFixed = !state.headerFixed;
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
        }        
    },
    getters: {
        sidebarClosing: state => state.sidebar.close,
        rightSideOpening: state => state.rightSide,
        mask: state => state.mask,
        headerFixed: state => state.headerFixed
    }
}