import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters({
            sidebarClosing: 'app/sidebarClosing',
            rightSideOpening: 'app/rightSideOpening',
            headerFixed: 'app/headerFixed',
            userAvatar: 'user/avatar'
        })
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'app/toggleSidebar',
            toggleRightSide: 'app/toggleRightSide',
            toggleHeaderFixed: 'app/toggleHeaderFixed',
        }),
        ...mapActions({
            lock: 'app/lock',
        })
    }
}