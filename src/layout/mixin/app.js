import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            sidebarOpening: 'app/sidebarOpening',
            rightSideOpening: 'app/rightSideOpening',
            logo: 'app/logo'
        })
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'app/toggleSidebar',
            toggleRightSide: 'app/toggleRightSide'
        })
    }
}