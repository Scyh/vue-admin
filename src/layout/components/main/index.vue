<template functional>
    <div class="lo-main">
       <main>
           <el-container>
               <el-main>
                <router-view />
               </el-main>
           </el-container>
       </main>
    </div>
</template>
<style scoped lang="scss">
.lo-main {
    margin-left: $sidebarWidth;
    > main {
        position: relative;
        @include transition-collapse;
    }
}
</style>