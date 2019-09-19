<template>
    <div id="app_layout">
            <siderbar />
        <main id="page_main" :class="{'expand': siderbarOpening}">
            <page-title />
            <router-view />
        </main>
    </div>
</template>
<script>
import siderbar from '@/layout/components/siderBar'
import pageTitle from '@/layout/components/pageTitle'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['siderbarOpening'])
    },
    components: {
        siderbar,
        pageTitle
    }    
}
</script>
<style scoped>
#app_layout {
    position: relative;
    /* width: 100vw;
    height: 100vh; */
}

#siderbar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
}

#page_main {
    /* width: calc(100% - 200px); */
    margin-left: 200px;
    transition: all 0.3s ease-in-out;
}

#page_main.expand {
    /* width: calc(100% - 65px); */
    margin-left: 65px;
}

</style>