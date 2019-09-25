<template>
    <div id="layout" :class='{"mask": mask}' @click="closeMask($event)">
        <lo-header />
        <lo-aside />
        <lo-main />
        <right-side />      
    </div>
</template>
<script>

import loMain from '@/layout/components/main'
import loAside from '@/layout/components/menu'
import loHeader from '@/layout/components/header'
import rightSide from '@/layout/components/rightSide'

import { mapGetters, mapMutations } from 'vuex'

export default {
    components: {
        loMain,
        loAside,
        loHeader,
        rightSide
    },
    computed: {
        ...mapGetters({
            mask: 'app/mask'
        })
    },
    methods: {
        ...mapMutations({
            closeMask: 'app/closeMask',
        })
    }
}

</script>