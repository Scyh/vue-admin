<template>
    <div id="siderbar">
        <el-scrollbar wrap-class="sider-wrap">
            <el-menu :default-active="activeRoute" :collapse="siderbarOpening" :router="true" class="el-menu-vertical">
                <sideritem v-for="route in routes" :route="route" :isBase="true" :basePath="route.path" :key="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import sideritem from "./sideritem";
import { mapGetters } from "vuex";

export default {
    name: "siderbar",
    components: {
        sideritem
    },
    computed: {
        ...mapGetters(["routes", "siderbarOpening"]),

        activeRoute() {
            return this.$route.path;
        }
    }
};
</script>
<style scoped>
.sider-wrap {
    height: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
}
.horizontal-collapse-transition {
    transition: .3s all ease-in-out;
}
</style>