<template>
    <header id="page_title">
        <el-button icon="el-icon-s-operation" @click="toggleSiderbar"></el-button>
    </header>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            toggleSiderbar: 'app/toggleSiderbar'
        })
    }
}
</script>