import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            sidebarOpening: 'app/sidebarOpening',
            logo: 'app/logo'
        })
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'app/toggleSidebar'
        })
    }
}