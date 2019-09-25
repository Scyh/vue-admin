<template>
    <div :class='["lo-main", { "show-right-side": rightSideOpening, "expand": sidebarOpening }]'>
       <main>
           <el-container>
               <el-main>
                <router-view />
               </el-main>
           </el-container>
       </main>
    </div>
</template>
<script>
import appMixin from '@/layout/mixin/app'

export default {
    mixins: [appMixin],
}
</script>
<style scoped lang="scss">
.lo-main {
    margin-left: $sidebarWidth;
    > main {
        position: relative;
        @include transition-collapse;
    }
}
.lo-main.expand {
    margin-left: $sidebarCollapse;
}
</style>