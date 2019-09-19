<template>
    <div class="sider-item" v-if="!route.hide">
        <el-menu-item v-if="isBase && (!route.children || isRoot())" :index="resolvePath((route.children && route.children[0].path) || route.path)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>

        <el-menu-item v-else-if="!route.children" :index="resolvePath(route.path)">
            {{ route.meta.title }}
        </el-menu-item>
        
        <el-submenu v-else :index="route.path">
            <template slot="title" v-if="isBase">
                <i class="el-icon-menu"></i>
                <span class="submenu-title" slot="title">{{ route.meta.title }}</span>
            </template>
            <span v-else slot="title">{{ route.meta.title }}</span>
            <sideritem v-for="child in route.children" :key="child.path" :route="child" :basePath="resolvePath(route.path)" />
        </el-submenu>
    </div>
</template>
<script>
import _path from 'path';

export default {
    name: 'sideritem',
    props: {
        route: {
            type: Object,
            required: true
        },
        basePath: String,
        isBase: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        isRoot() {
            return this.route.children && this.route.children.length === 1;
        },
        resolvePath(path) {
            return this.basePath ? _path.resolve(this.basePath, path)
                                 : path;
        }
    }
}
</script>
<style scoped>

</style>