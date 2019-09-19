<template>
    <header class="lo-header">
        <div v-show="logo" :class="['lo-header-left', sidebarOpening ? 'collapse' : '']">BRAND</div>
        <div class="lo-header-right">
            <el-button @click="toggleSidebar">click</el-button>
        </div>
    </header>
</template>
<script>
import appMixin from '@/layout/mixin/app'
export default {
    mixins: [appMixin],
}
</script>
<style lang="scss" scoped>
.lo-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: $headerHeight;
    line-height: $headerHeight;
    box-shadow: 0 1px 4px $borderColor;
    .lo-header-left {
        @include transition-collapse;
        width: $sidebarWidth;
        text-align: center;
    }
    .lo-header-left.collapse {
        width: $sidebarCollapse;
    }
    .lo-header-right {
        flex: 1;
    }

}
</style>