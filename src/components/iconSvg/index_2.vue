<template>
    <i class="icon-svg" v-html="svg"></i>
</template>
<script>
export default { 
    name: 'icon-svg',
    props: {
        name: {
            required: true,
            type: String,
        }
    },
    computed: {
        svg() {
            return require(`@/icons/svgs/${this.name}.svg`)
        }
    }
}
</script>
<style lang="scss">
.icon-svg {
    color: #909399;
    > svg {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: #369;
        overflow: hidden;
    }
}
</style>