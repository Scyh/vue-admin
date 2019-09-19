<template>
    <div class="lo-main">
       <lo-aside />
       <main :class="{ 'expand': sidebarOpening }">
           <router-view />
       </main>
    </div>
</template>
<script>

import loAside from '@/layout/components/aside'
import appMixin from '@/layout/mixin/app'

export default {
    components: {
        loAside
    },
    mixins: [appMixin],
}
</script>
<style scoped lang="scss">
.lo-main {
    > main {
        position: relative;
        margin-left: $sidebarWidth;
        @include transition-collapse;
    }
    > main.expand {
        margin-left: $sidebarCollapse;
    }
}
</style>