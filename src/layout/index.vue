<template>
    <div id="layout">
        <lo-header />
        <lo-main />
    </div>
</template>
<script>

import loMain from '@/layout/components/main'
import loHeader from '@/layout/components/header'

export default {
    components: {
        loHeader,
        loMain,
    }    
}

</script>
