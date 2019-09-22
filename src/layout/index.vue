<template>
    <div id="layout">
        <lo-header />
        <lo-aside />
        <!-- <lo-main /> -->
        <right-side />
    </div>
</template>
<script>

import loMain from '@/layout/components/main'
import loAside from '@/layout/components/menu'
import loHeader from '@/layout/components/header'
import rightSide from '@/layout/components/rightSide'

export default {
    components: {
        loMain,
        loAside,
        loHeader,
        rightSide
    }    
}

</script>
