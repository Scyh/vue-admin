<template>
    <div class="side-item" v-if="!route.hide">
        <el-menu-item v-if="isBase && (!route.children || isRoot())" :index="resolvePath(baseRoute(route, 'path'))">
            <alink :icon="baseRoute(route, 'meta.icon')" :title="baseRoute(route, 'meta.title')" />
        </el-menu-item>

        <el-menu-item v-else-if="!route.children" :index="resolvePath(route.path)">
            {{ route.meta.title }}
            <!-- <alink :icon="route.meta.icon || 'menu'" :title="route.meta.title" /> -->
        </el-menu-item>
        
        <el-submenu v-else :index="route.path">
            <template slot="title" v-if="isBase">
                <alink :icon="route.meta.icon || 'menu'" :title="route.meta.title" :className='["submenu-title"]' />
            </template>
            <span v-else slot="title">{{ route.meta.title }}</span>
            <sideitem v-for="child in route.children" :key="child.path" :route="child" :basePath="resolvePath(route.path)" />
        </el-submenu>
    </div>
</template>
<script>
import _path from 'path';
import alink from './alink';

export default {
    name: 'sideitem',
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
    components: {
        alink,
    },
    methods: {
        baseRoute(route, attr) {
            const _route = route.children && route.children[0] || route;
            if (attr.includes('.')) {
                return attr.split('.').reduce((data, item) => {
                    return data = data[item] || {}
                }, _route);
            } else {
                return _route[attr];
            }
        },

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