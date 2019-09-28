import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            sidebarClosing: 'app/sidebarClosing',
            rightSideOpening: 'app/rightSideOpening',
            headerFixed: 'app/headerFixed'
        })
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'app/toggleSidebar',
            toggleRightSide: 'app/toggleRightSide',
            toggleHeaderFixed: 'app/toggleHeaderFixed'
        })
    }
}