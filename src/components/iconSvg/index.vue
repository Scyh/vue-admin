<template>
    <svg :class="['icon-svg', ...className]" v-on="$listeners">
        <use :xlink:href="'#icon-' + name" />
    </svg>
</template>
<script>
export default { 
    name: 'icon-svg',
    props: {
        className: {
            default: () => [],
            type: Array
        },
        name: {
            required: true,
            type: String,
        }
    },
}
</script>
<style lang="scss">
.icon-svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>