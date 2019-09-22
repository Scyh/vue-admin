<template>
    <div :class='["right-side", { "open": rightSideOpening }]'>
        侧边栏
    </div>
</template>
<script>
import appMixin from '@/layout/mixin/app'
export default {
    mixins: [appMixin],
}
</script>
<style lang="scss" scoped>
.right-side {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1000;
    right: -$rightSideWidth;
    width: $rightSideWidth;
    background: $sidebarBgColor;
}
.right-side.open {
    right: 0;
}
</style>