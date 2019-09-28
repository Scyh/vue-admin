<template>
    <div class="lo-sidebar">
        <el-scrollbar wrap-class="side-wrap">
            <el-menu
                :default-active="activeRoute"
                :collapse="sidebarClosing"
                :router="true"
                :background-color="variables.sidebarBgColor"
                :text-color="variables.sidebarTextColor"
                :active-text-color="variables.sidebarActiveColor"
                class="el-menu-vertical">
                <sideitem v-for="route in routes" :route="route" :isBase="true" :basePath="route.path" :key="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import sideitem from "./sideitem"
import { mapGetters } from "vuex"
import appMixin from '@/layout/mixin/app'
import _variables from '@/style/variables.scss'

export default {
    name: "lo-sidebar",
    mixins: [appMixin],
    components: {
        sideitem
    },
    computed: {
        ...mapGetters(["routes"]),

        activeRoute() {
            return this.$route.path;
        },

        variables() {
            return _variables
        },
    }
};
</script>
